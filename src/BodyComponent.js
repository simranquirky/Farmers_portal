import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import data from "./data1.json";
import Cart from "./Cart";
import Team from "./TeamComponent";
import HeadingComponent from "./HeadingComponent";
import CardComponent from "./CardComponent";
import Checkout from "./Checkout";

const BodyComponent = () => {
  const [filteredresults, setfilteredresults] = useState(data);
  const [showTeam, setShowTeam] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showHome, setShowHome] = useState(true);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.name === product.name);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log(cartItems);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
    setShowHome(false);
    setShowTeam(false);
  };

  const handleHome = () => {
    setShowHome(true);
    setShowTeam(false);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
  };

  return (
    <div className="body-content">
      {showCheckout ? (
        <Checkout cartItems={cartItems} handleBackToCart={handleBackToCart} />
      ) : (
        <>
          <HeadingComponent
            setfilteredresults={setfilteredresults}
            showTeam={showTeam}
            setShowTeam={setShowTeam}
            setShowHome={setShowHome}
          />
          <div className="product_cart">
            {!showTeam && (
              <div className="card-container">
                { !showCheckout && <CardComponent
                  filteredresults={filteredresults}
                  handleAddToCart={handleAddToCart}
                />}
              </div>
            )}
            {showTeam && (
              <Team />
            )}
            {!showTeam && (
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                handleCheckout={handleCheckout}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
            }

export default BodyComponent;
