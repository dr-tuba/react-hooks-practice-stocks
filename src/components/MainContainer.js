import React from "react";
import { useState } from 'react';
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, setStocks, purchasedStocks, setPurchasedStocks, handleClick, formData, handleChange }) {
  const [filter, setFilter] = useState('All')
  
  function sortByPrice(array) {
    return array.sort(function(a, b) {
      let stockA = a.price
      let stockB = b.price
      if (stockA < stockB) {
        return -1
      }
      if (stockA > stockB) {
        return 1
      }
    })
  }

  function sortByAlphabet(array) {
    return array.sort(function(a, b) {
      let stockA = a.name.toUpperCase()
      let stockB = b.name.toUpperCase()
      if (stockA < stockB) {
        return -1
      }
      if (stockA > stockB) {
        return 1
      }
    })
  }
  
  const handleSort = (e) => {
    if (e.target.value === 'Alphabetically') {
      const stocksSortedByAlphabet = sortByAlphabet([...stocks])
      setStocks(stocksSortedByAlphabet)
  
      const purchasedStocksSortedByAlphabet = sortByAlphabet([...purchasedStocks])
      setPurchasedStocks(purchasedStocksSortedByAlphabet)
    
    } else {
      const stocksSortedByPrice = sortByPrice([...stocks])
      setStocks(stocksSortedByPrice)

      const purchasedStocksSortedByPrice = sortByPrice([...purchasedStocks])
      setPurchasedStocks(purchasedStocksSortedByPrice)
    }
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }
  
  return (
    <div>
      <SearchBar 
        formData={formData}
        handleChange={handleChange}
        handleSort={handleSort}
        handleFilter={handleFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={stocks}
            filter={filter}
            handleClick={handleClick}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            purchasedStocks={purchasedStocks}
            filter={filter}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
