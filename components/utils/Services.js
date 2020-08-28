import React from "react";
import { FaShippingFast, FaGifts, FaRedo } from "react-icons/fa";
const Services = () => {
  return (
    <div className="bg-white py-5">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold uppercase mt-2 text-gray-900 ">
          Services
        </h1>
        <div className="h-1 mx-12 mt-2  w-24 bg-indigo-600 rounded-full mb-2 "></div>
      </div>
      <div className="my-10 bg-white px-10 lg:px-48 md:grid md:gap-4 md:grid-cols-3">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl text-indigo-600">
            <FaShippingFast />
          </h1>
          <h1 className="my-5 text-2xl text-gray-900 ">Fast delivery</h1>
          <p className="text-gray-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
            architecto?
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl text-indigo-600">
            <FaGifts />
          </h1>
          <h1 className="my-5 text-2xl text-gray-900 ">Free shipping</h1>
          <p className="text-gray-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
            architecto?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl text-indigo-600">
            <FaRedo />
          </h1>
          <h1 className="my-5 text-2xl text-gray-900 ">
            30 Days Return Policy
          </h1>
          <p className="text-gray-800">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
            architecto?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
