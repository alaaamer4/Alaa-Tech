import React, { useState, useEffect } from "react";
import * as types from "../../store/types";
import { GoSearch } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
const FilterProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [filter, setFilter] = useState({
    search: products.search,
    price: products.price,
    max: products.price,
    min: 0,
    company: products.company,
    shipping: products.shipping,
  });
  const { search, price, max, min, company, shipping } = filter;

  const handelFilter = () => {
    let tempPrice = parseInt(price);
    let tempProducts = [...products.storeProducts];
    // handel price filter
    tempProducts = tempProducts.filter((item) => {
      return item.price <= tempPrice;
    });
    // handel company filter
    if (company !== "all" && company !== "All") {
      tempProducts = tempProducts.filter((item) => {
        return item.company === company;
      });
    }

    //handel free shipping  filter

    if (shipping) {
      tempProducts = tempProducts.filter((item) => {
        return item.freeShipping === true;
      });
    }
    // handel search filter
    if (search.length > 0) {
      tempProducts = tempProducts.filter((item) => {
        const regex = new RegExp(`${search}`, "gi");
        return item.title.match(regex);
      });
    }

    dispatch({
      type: types.FILTER_PRODUCTS,
      payload: [...tempProducts],
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFilter({ ...filter, [name]: value });
  };
  useEffect(() => {
    handelFilter();
  }, [filter]);
  return (
    <div className="mx-10 lg:mx-20 px10 grid grid-cols-1 lg:grid-cols-3 gap-x-4">
      <div className="flex  lg:col-span-3 w-full  my-5">
        <input
          type="text"
          name="search"
          id="search"
          className="py-1 px-5 w-full rounded-l-full lg:ml-20  focus:border-gray-600  border-solid border-r-0 border-2 outline-none border-gray-400 "
          placeholder="Search Items"
          value={search}
          onChange={handleChange}
        />
        <button
          className="py-1 px-5  rounded-r-full  lg:mr-20  focus:outline-none  bg-indigo-600 transform focus:scale-75 "
          type="submit"
        >
          <GoSearch className="text-xl text-indigo-100" />
        </button>
      </div>
      <div className="w-full">
        <select
          name="company"
          id="company"
          className="py-1 w-full lg:mx-4 px-4 border-2 border-gray-400 rounded-lg outline-none"
          defaultChecked={company}
          value={company}
          onChange={handleChange}
        >
          <option key={products.length + 1}>All</option>
          {products.storeProducts &&
            products.storeProducts.map((product) => {
              return <option key={product.id}>{product.company}</option>;
            })}
        </select>
      </div>
      <div className="w-full flex  justify-center items-center lg:ml-5">
        <label htmlFor="price" className="mr-3">
          {" "}
          Price : {price}${" "}
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={min}
          max={max}
          value={price}
          className="w-full"
          onChange={handleChange}
        />
      </div>
      <div className="w-full flex  justify-center items-center">
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          checked={shipping && true}
          onChange={handleChange}
          className="mr-2"
        />
        <span> Free Shipping </span>
      </div>
    </div>
  );
};

export default FilterProducts;
