import { Link } from 'react-router-dom'

function ProductCard({products, addItem}) {

    return (
    <div className="container">
    {products.map(product => (
      <div key={product.id} className="product-card">
      <img className ="product-image" src={product.image} width="100px"/>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button className="add-to-cart" onClick={addItem}>Add To Cart</button>
      </div>
      ))}
    </div>
    )
}

export default ProductCard
