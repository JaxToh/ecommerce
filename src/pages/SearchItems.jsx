import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard'

function SearchItems({addItem}) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("idle");

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
      setStatus("done");
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchProducts("electronics");
  }, []);


  return (
    <>
      <div className="hero"></div>
      <div className="search-bar">
      <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for products"
    />
    <button onClick={() => fetchProducts(searchTerm)}>Search</button>
      </div>
      <h4>Products:</h4>
      {products?.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div className="empty">
          <h2>No products found</h2>
        </div>
      )}

    </>
  )
}

export default SearchItems;
