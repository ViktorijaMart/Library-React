import React from "react";

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="book__price">
      {salePrice ? (
        <>
          <span className="book__price--normal">
            {originalPrice.toFixed(2)} &euro;
          </span>
          {salePrice.toFixed(2)} &euro;
        </>
      ) : (
        <>{originalPrice.toFixed(2)} &euro;</>
      )}
    </div>
  );
};

export default Price;
