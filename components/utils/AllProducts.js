import React, { useState, useEffect } from "react";

import Product from "./Product";
import { useSelector } from "react-redux";
import FilterProducts from "../filter/FilterProducts";
const AllProducts = () => {
  const { filteredProducts } = useSelector((state) => state.products);

  return (
    <div className="my-5  px-20">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold uppercase mt-2 text-gray-900 ">
          Our Products
        </h1>
        <div className="h-1 mx-12 mt-2  w-24 bg-indigo-600 rounded-full mb-2 "></div>
      </div>

      <FilterProducts />
      {filteredProducts && (
        <p className="text-2xl text-left font-bold">
          {" "}
          Total Products : {filteredProducts.length}
        </p>
      )}
      {filteredProducts && filteredProducts.length !== 0 ? (
        <div className="my-10 px-5 md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            return (
              <div key={product.id}>
                <Product info={product} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-4xl font-bold">
          Sorry , There are no items matching your search
        </p>
      )}
    </div>
  );
};

export default AllProducts;
