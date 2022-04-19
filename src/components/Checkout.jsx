import React from "react";

const Checkout = ({ desc, image, price }) => {
  return (
    <>
      <div className="cart-body">
        <div>
          <div className="imge">
            <img src={image} alt="" />
          </div>
          <div className="desc">{desc}</div>
        </div>
        <div>
            <h2>CART SUMMARY</h2>
            <span>Subtotal </span> <span>{price}</span>
            <button>CHECKOUT ({price})</button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
