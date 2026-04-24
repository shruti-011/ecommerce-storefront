import { useSelector } from "react-redux";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import HeroBanner from "../components/HeroBanner"; // ✅ ADD THIS

const Home = () => {
  const category = useSelector((state) => state.products.activeCategory);
  const search = useSelector((state) => state.products.searchTerm);

  const filteredProducts = products.filter((item) => {
    const matchCategory =
      category === "ALL" ||
      item.category.toLowerCase() === category.toLowerCase();

    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
     

      {/* FIX HEADER SPACE */}
      <div className="pt-[70px]"></div>

      {/* 🔥 HERO BANNER (ADD HERE) */}
      <HeroBanner />

      {/* PRODUCTS SECTION */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Optional heading */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Trending Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
