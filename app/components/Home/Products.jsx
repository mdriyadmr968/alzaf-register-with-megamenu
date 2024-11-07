// pages/product.js
import React from "react";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1", price: "20", image: "/images/shirt.png" },
    { id: 2, name: "Product 2", price: "30", image: "/images/shirt.png" },
    { id: 3, name: "Product 3", price: "25", image: "/images/shirt.png" },
    { id: 4, name: "Product 4", price: "20", image: "/images/shirt.png" },
    { id: 5, name: "Product 5", price: "30", image: "/images/shirt.png" },
    { id: 6, name: "Product 6", price: "25", image: "/images/shirt.png" },
  ];

  const recommendedProducts = [
    {
      id: 1,
      name: "Recommended 1",
      price: "15",
      image: "/images/shirt.png",
    },
    {
      id: 2,
      name: "Recommended 2",
      price: "40",
      image: "/images/shirt.png",
    },
    {
      id: 3,
      name: "Recommended 3",
      price: "15",
      image: "/images/shirt.png",
    },
    {
      id: 4,
      name: "Recommended 4",
      price: "40",
      image: "/images/shirt.png",
    },
  ];

  return (
    <div className="container mx-auto p-4 text-black">
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-3/4 p-2">
          <h1 className="text-lg md:text-2xl font-bold mb-4">Products</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-30 md:h-48 object-cover rounded-t-lg"
                />
                <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price} bdt</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/4 p-2">
          <h2 className="text-lg md:text-xl font-semibold mb-4 ">Recommended Products</h2>
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-2 mb-4 shadow w-full flex  justify-between items-center"
            >
              <div className="flex gap-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 rounded-t-lg"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="mt-2 text-md font-bold">{product.name}</h3>
                  <p className="text-gray-600">{product.price} bdt</p>
                </div>
              </div>
              <div className="">
                <button className="bg-green-500 p-2 text-white rounded">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
