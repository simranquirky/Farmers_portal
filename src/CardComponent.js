const CardContainer = ({ filteredresults, handleAddToCart }) =>
  filteredresults.map((product) => (
    <div key={product.name} className="Product_Card">
      <img src={product.img_url} className="product_image" />
      <div className="product-details">
        <h3>{product.type} {product.name}</h3>
        <h5>{product.variety} {product.category}: {product.season}</h5>
        <p>Rs.{product.cost_per_kg}/kg<button className="Addcart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button></p>
      </div>
    </div>
  ));

  export default CardContainer;