import React from "react";

function Stock({ id, ticker, name, type, price, handleClick }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 id={id} onClick={handleClick} className="card-title">{name}</h5>
          <p className="card-text">{ticker}:{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
