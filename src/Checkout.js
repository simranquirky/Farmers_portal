import React from "react";
import "./Checkout.css";
const Checkout = ({ cartItems, handleBackToCart }) => {
    console.log(cartItems);
  const totalPrice = cartItems
    ? cartItems.reduce(
        (total, item) => total + item.cost_per_kg * item.quantity,
        0
      )
    : 0;

  const handlePlaceOrder = () => {
    // Handle placing order logic here
    console.log("Placing order...");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h2>Checkout</h2>
        <button onClick={handleBackToCart}>Back to Cart</button>
      </div>
      <div className="checkout-items">
        {cartItems &&
          cartItems.map((item) => (
            <div key={item.index} className="checkout-item">
              <img src={item.img_url} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{`Rs.${item.cost_per_kg} x ${item.quantity}`}</p>
              </div>
              <p>{`Rs.${item.cost_per_kg * item.quantity}`}</p>
            </div>
          ))}
      </div>
      <div className="checkout-summary">
        <div className="summary-row">
          <p>Subtotal:</p>
          <p>{`Rs.${totalPrice.toFixed(2)}`}</p>
        </div>
        <div className="summary-row">
          <p>Tax:</p>
          <p>Rs.0.00</p>
        </div>
        <div className="summary-row">
          <p>Shipping:</p>
          <p>Rs.0.00</p>
        </div>
        <div className="summary-row">
          <h3>Total:</h3>
          <h3>{`Rs.${totalPrice.toFixed(2)}`}</h3>
        </div>
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place your order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
