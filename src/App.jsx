import  { useState, useEffect } from "react";
import Sidebar from "./components/menubar/Sidebar";
import ProductList from "./components/AddToCarts/ProductList";
import SearchBar from "./components/displaying/SearchBar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const formattedData = data.meals.map((meal) => ({
            id: meal.idMeal,
            title: meal.strMeal,
            category: meal.strCategory,
            image: meal.strMealThumb,
            price: (Math.random() * 20 + 5).toFixed(2),
          }));
          setProducts(formattedData);
          setFilteredProducts(formattedData);
         
        }
      });
  }, []);

  const searchProducts = (term) => {
    setSearchTerm(term);
    setFilteredProducts(
      products.filter((product) => {
        const matchesTitle = product.title.toLowerCase().includes(term.toLowerCase());
        const matchesCategory = product.category.toLowerCase().includes(term.toLowerCase());
        const priceRange = term.match(/(\d+)-(\d+)/);
        
        if (priceRange) {
          const minPrice = parseFloat(priceRange[1]);
          const maxPrice = parseFloat(priceRange[2]);
          return product.price >= minPrice && product.price <= maxPrice;
        }
        return matchesTitle || matchesCategory;
      })
    );
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4 flex">
      <Sidebar cart={cart} removeFromCart={removeFromCart} />
      <div className="w-3/4 p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Food E-Commerce</h1>
        <SearchBar searchTerm={searchTerm} searchProducts={searchProducts} />
        <ProductList products={filteredProducts} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default App;