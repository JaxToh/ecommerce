import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails({addItem}) {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const handleClick = (e, product) => {
        addItem(product);
        e.target.className = "added";
         setTimeout(() => {
          e.target.className = "add-to-cart";
        }, 250);
    }

    const fetchProducts = async () => {
        try {
          const request = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          if (!request.ok) {
            throw new Error("Network error");
          }
          const data = await request.json();
          setProduct(data);
        } catch (error) {
          console.log("error")
        }
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);

    return (
      <>
        <h2 className="h2">Product Details</h2>
        <div className="product-details">
            <img src={product.image} className="details-img" alt={product.title} width="20%"/>
             <p><b>{product.title}</b></p>
             <small>Category: {product.category}</small>
             <p>{product.description}</p>
             <p>Price: <b>${product.price}</b></p>
            <button className="add-to-cart" onClick={e => handleClick(e, product)}>Add To Cart</button>
        </div>
        </>
    )
}

export default ProductDetails