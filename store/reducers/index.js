import { combineReducers } from "redux";
import { navReducer } from "./Navbar";
import { productReducer } from "./Products";
export default combineReducers({
  navbar: navReducer,
  products: productReducer,
});
