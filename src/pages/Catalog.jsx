import Product from "../components/Product";
import "./Catalog.css";
import { useEffect, useMemo, useState } from "react";
import DataService from "../services/dataService";
import {
  IconApps,
  IconHeadphones,
  IconHome2,
  IconShirt,
  IconPaw,
  IconBackpack,
  IconBarbell,
  IconSunglasses,
  IconDeviceLaptop,
  IconCamera,
  IconBolt
} from "@tabler/icons-react";

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

  const catIcon = useMemo(() => ({
    Electronics: IconHeadphones,
    Home: IconHome2,
    Clothing: IconShirt,
    Pets: IconPaw,
    Outdoors: IconBackpack,
    Fitness: IconBarbell,
    Accessories: IconSunglasses,
    Office: IconDeviceLaptop,
    Cameras: IconCamera,
  }), []);

  return (
    <div className="catalog">
      <div className="hero" style={{display: "none"}}>
        <div className="hero-content">
          <div className="hero-eyebrow">Hi, Shopper <span className="wave">👋</span></div>
          <h1 className="hero-title">Shop the New <span className="accent">Nerd Gear</span></h1>
          <p className="hero-sub">Special deal: <IconBolt size={18}/> 30% off select items</p>
        </div>
      </div>

      <div className="categories-strip">
        <button
          className={`catChip ${activeCategory === "All" ? "active" : ""}`}
          onClick={() => filter("All")}
        >
          <IconApps size={20} />
          <span>All</span>
        </button>

        {categories.map((cat) => {
          const Icon = catIcon[cat] || IconApps;
          return (
            <button
              key={cat}
              onClick={() => filter(cat)}
              className={`catChip ${activeCategory === cat ? "active" : ""}`}
              title={cat}
            >
              <Icon size={20} />
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      <div id="products" className="product-list">
        {filteredProducts.map((prod) => (
          <Product key={prod._id} data={prod} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
