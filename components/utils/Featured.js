import React from "react";

import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
const Featured = () => {
  const { featuredProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="my-5  px-20">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold uppercase mt-2 text-gray-900 ">
          Featured products
        </h1>
        <div className="h-1 mx-12 mt-2  w-24 bg-indigo-600 rounded-full mb-2 "></div>
      </div>
      <div className="my-10 px-5 md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProducts &&
          featuredProducts.map((product) => {
            return (
              <div key={product.id}>
                <Product info={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Featured;
