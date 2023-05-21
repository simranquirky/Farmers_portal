import React, { useState } from "react";
import "./Cart.css";
import Checkout from "./Checkout";

const Cart = ({ cartItems, setCartItems }) => {
  const [checkoutClicked, setCheckoutClicked] = useState(false);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.cost_per_kg * item.quantity,
    0
  );

  const incrementQuantity = (index) => {
    const newCartItems = cartItems.map((item) =>
      item.index === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems([...newCartItems]);
  };
  
  const decrementQuantity = (index) => {
    const newCartItems = cartItems.map((item) =>
      item.index === index ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems([...newCartItems]);
  };
  
  const removeItem = (index) => {
    const newCartItems = cartItems.filter((item) => item.index !== index);
    setCartItems([...newCartItems]);
  };
  
  const CartItem = ({ item }) => {
    return (
      <div className="cart_item">
        <p>
          {item.name}
          <button onClick={() => decrementQuantity(item.index)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => incrementQuantity(item.index)}>+</button>
        </p>
        <div>
          <p>Rs.{item.cost_per_kg * item.quantity}<button className="Remove-btn" onClick={() => removeItem(item.index)}>Remove</button></p>
        </div>
      </div>
    );
  };
  
  const handleCheckout = () => {
    setCheckoutClicked(true);
  };

  return (
    <div className="Cart">
      <h2>Cart</h2>
      {!checkoutClicked ? (
        <>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <CartItem item={item} />
                  </li>
                ))}
              </ul>
              <p>Cart Total: Rs.{cartTotal}<button className="Checkout-btn" onClick={handleCheckout}>Checkout</button></p>
            </>
          )}
        </>
      ) : (
        <Checkout cartItems={cartItems} handleBackToCart={() => setCheckoutClicked(false)} />
      )}
    </div>
  );
};

export default Cart;
