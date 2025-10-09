import Product from "../components/Product";
import "./Catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All"); 

  function loadCategories(data) {
    const cats = [...new Set(data.map(p => p.category))];
    setCategories(cats);
  }

  function filter(cat) {
    setActiveCategory(cat); 
    if (cat === "All") {
      setFilteredProducts(products);
    } else {
      const list = products.filter(p => p.category === cat);
      setFilteredProducts(list);
    }
  }

  useEffect(() => {
    let service = new DataService();
    let data = service.getProducts();

    setProducts(data);
    setFilteredProducts(data);
    loadCategories(data);
  }, []);

  return (
    <div className="catalog">
      <div className="heading-container">
        <h1>Check Out Our {products.length} Amazing Products</h1>

        <div className="categories">
          <button
            className={`catButton ${activeCategory === "All" ? "active" : ""}`}
            onClick={() => filter("All")}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => filter(cat)}
              className={`catButton ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="product-list">
        {filteredProducts.map((prod) => (
          <Product key={prod._id} data={prod} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
