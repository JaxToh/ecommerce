import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard'

function SearchItems({addItem}) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const request = await fetch(
        `https://fakestoreapi.com/products/`
      );
      if (!request.ok) {
        throw new Error("Network error");
      }
      const data = await request.json();
      setProducts(data);
    } catch (error) {

    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <>
    <img className="hero" src="src/assets/image.jpeg" alt="image"/>
       <div className="search-bar">
         <input
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           placeholder="Search for products"/>
         <button onClick={() => fetchProducts(searchTerm)}>Search</button>
       </div>

    <h4>All Products:</h4>
    {products?.length > 0 ? (
        <ProductCard products={products} addItem={addItem}/>
      ) : (
        <div className="empty">
          <h2>No products found</h2>
        </div>
      )}
    </>
  )
}

export default SearchItems;
