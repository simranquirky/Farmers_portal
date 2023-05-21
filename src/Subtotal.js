import React from "react";

const Subtotal = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="subtotal-container">
      <div className="subtotal-item">
        <p>Subtotal ({cartItems.length} items):</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="subtotal-item">
        <p>Tax:</p>
        <p>${tax.toFixed(2)}</p>
      </div>
      <div className="subtotal-item">
        <p>Total:</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
