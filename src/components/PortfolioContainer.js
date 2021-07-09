import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ purchasedStocks, handleClick, filter }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {purchasedStocks.map(stock => {
        return (
        <Stock 
          key={stock.id}
          id={stock.id}
          ticker={stock.ticker}
          name={stock.name}
          type={stock.type}
          price={stock.price}
          handleClick={handleClick}
      />
      )})}
    </div>
  );
}

export default PortfolioContainer;
