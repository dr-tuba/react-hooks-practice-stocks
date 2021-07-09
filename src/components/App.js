import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])
  const [purchasedStocks, setPurchasedStocks] = useState([])
  const [formData, setFormData] = useState({
    ticker: '',
    name: '',
    type: '',
    price: '',
  })

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(resp=>resp.json())
    .then(data=>setStocks(data))
  }, [])

  const handleClick = (e) => {
    const clickedStockFromStocks = stocks.find(stock => stock.id === parseInt(e.target.id))
    const clickedStockFromPurchasedStocks = purchasedStocks.find(stock => stock.id === parseInt(e.target.id))
    if (clickedStockFromStocks) {
      const copyOfStocks = [...stocks]
      const newArray = copyOfStocks.filter(stock => stock.id !== parseInt(e.target.id))
      setPurchasedStocks([...purchasedStocks, clickedStockFromStocks])
      setStocks(newArray)
    }
    if (clickedStockFromPurchasedStocks) {
      const copyOfPurchasedStocks = [...purchasedStocks]
      const arrayWithout = copyOfPurchasedStocks.filter(stock => stock.id !== parseInt(e.target.id))
      setPurchasedStocks(arrayWithout)
      setStocks([...stocks, clickedStockFromPurchasedStocks])
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div>
      <Header />
      <MainContainer 
        stocks={stocks}
        setStocks={setStocks}
        purchasedStocks={purchasedStocks}
        setPurchasedStocks={setPurchasedStocks}
        handleClick={handleClick}
        formData={formData}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
