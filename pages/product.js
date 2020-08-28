import Layout from "../components/utils/Layout";
import { items } from "../store/productData";
import * as types from "../store/types";
import { useEffect } from "react";
import { btn } from "../components/utils/tailwindutil";

import { withRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";

function Product({ router }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { singleProduct } = products;
  const id = router.query.id;
  //* get single product
  const getSingleProduct = (id) => {
    const product = items.find((item) => item.id === id);
    dispatch({ type: types.GET_SINGLE_PRODUCT, payload: product });
  };
  useEffect(() => {
    getSingleProduct(Number(id));
  }, [singleProduct]);
  //* add product to cart
  const addToCart = async (id) => {
    let cartItems = products.cart;
    let allProducts = products.storeProducts;
    //* check if the item is already in the cart
    let selectedProduct = cartItems.find((item) => item.id === id);
    if (!selectedProduct) {
      //* if it's not in the cart we grab it from the store products
      selectedProduct = allProducts.find((product) => product.id === id);
      let total = selectedProduct.price;
      let cartProduct = { ...selectedProduct, count: 1, total };
      cartItems = [...cartItems, cartProduct];
    } else {
      //* if selected product already in the cart
      selectedProduct.count++;
      selectedProduct.total = selectedProduct.count * selectedProduct.price;
      selectedProduct.total = parseFloat(selectedProduct.total.toFixed(2));
    }
    dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: cartItems });
    dispatch({ type: types.OPEN_SIDE_CART });
  };
  return (
    <Layout>
      {singleProduct.image !== undefined && (
        <div className="grid grid-cols-5 gap-8 px-20 lg:px-48 my-16">
          <div className="md:col-span-2 col-span-5 overflow-hidden rounded">
            <img src={`${singleProduct.image.url}?webp`} className="w-full" />
          </div>
          <div className="md:col-span-3 col-span-5">
            <h1 className="text-3xl text-gray-900 font-semibold my-4">
              {singleProduct.title}
            </h1>
            <span className="inline-block bg-orange-400 rounded-full px-4 py-1  font-semibold text-orange-100 mr-2 mb-2">
              {singleProduct.company}
            </span>
            <p className="text-gray-800  text-base leading-8 my-2">
              {singleProduct.description}
            </p>
            <p className="text-gray-800 font-semibold text-base leading-8 my-2">
              {singleProduct.price} $
            </p>

            <a
              className={`${btn}ml-32 cursor-pointer `}
              onClick={() => addToCart(singleProduct.id)}
            >
              Add to cart{" "}
              <MdAddShoppingCart className="inline-block text-xl ml-2" />
            </a>
          </div>
        </div>
      )}
    </Layout>
  );
}
export default withRouter(Product);
