import { Link } from 'react-router-dom'

function ProductCard({products}) {

    return (
    <div className="container">
    {products.map(product => (
      <div key={product.id} className="product-card">
      <img className ="product-image" src={product.image} width="100px"/>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <Link to={`/${product.id}`}>
      <button className="add-to-cart">View details</button>
      </Link>
      </div>
      ))}
    </div>
 
    )
}

export default ProductCard
