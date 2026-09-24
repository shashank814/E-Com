import React from 'react'
import { useNavigate } from "react-router";

function ProductCard({ product }) {

  const navigate = useNavigate()

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-72 hover:shadow-lg transition">
      
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-2">
        
        {/* TITLE */}
        <h2 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* CATEGORY */}
        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* PRICE */}
        <div className="text-xl font-bold text-green-600 mt-2">
          ₹{product.price}
        </div>

        {/* BUTTON */}
        <button onClick={() => navigate(`/main/product/${product._id}`)} className="mt-3 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          View Product
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
