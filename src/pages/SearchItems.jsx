import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard'

function SearchItems({addItem}) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("electronics");

  const fetchProducts = async (category) => {
    try {
      const request = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      if (!request.ok) {
        throw new Error("Network error");
      }
      const data = await request.json();
      setProducts(data);
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    fetchProducts(searchTerm);
  }, [searchTerm]);

  return (
    <>
    <img className="hero" src="https://i.imgur.com/KAk0cnY.jpg" alt="image"/>

      <form className="search-bar">
       <label><b>Choose a category: </b></label>
        <select value={searchTerm} onChange ={e => setSearchTerm(e.target.value)}>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewellery</option>
          <option value="men's clothing">Men's Fashion</option>
          <option value="women's clothing">Women's Fashion</option>
        </select>
       </form>


    <h4>All Products:</h4>
    {products?.length > 0 ? (
        <ProductCard products={products} addItem={addItem}/>
      ) : (
        <div className="empty">
          <h2>Loading...</h2>
        </div>
      )}
    </>
  )
}

export default SearchItems;
