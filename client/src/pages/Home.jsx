import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { allProducts } = useContext(ProductContext);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      {allProducts.map((elem) => (
        <ProductCard key={elem._id} product={elem} />
      ))}
    </div>
  );
};

export default Home;
