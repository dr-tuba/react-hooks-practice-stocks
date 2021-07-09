import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick, filter }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => { 
        if (filter === 'All') { return (
        <Stock 
          key={stock.id}
          id={stock.id}
          ticker={stock.ticker}
          name={stock.name}
          type={stock.type}
          price={stock.price}
          handleClick={handleClick}
        />
      )
    } else if (filter === stock.type) return (
      <Stock 
          key={stock.id}
          id={stock.id}
          ticker={stock.ticker}
          name={stock.name}
          type={stock.type}
          price={stock.price}
          handleClick={handleClick}
        />
      )
    })}
    </div>
  );
}

export default StockContainer;
