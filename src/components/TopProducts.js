import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setTopProducts(products));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Top Products</h1>
      <div className="flex flex-wrap justify-center gap-2 w-full ">
        {topProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
