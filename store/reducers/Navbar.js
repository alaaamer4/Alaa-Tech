import * as types from "../types";

const initialState = {
  sideBarOpen: false,
  sideCartOpen: false,
};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDE_BAR:
      return {
        ...state,
        sideBarOpen: !state.sideBarOpen,
      };
    case types.TOGGLE_SIDE_CART:
      return {
        ...state,
        sideCartOpen: !state.sideCartOpen,
      };
    case types.OPEN_SIDE_CART:
      return {
        ...state,
        sideCartOpen: true,
      };
    case types.CLOSE_SIDE_CART:
      return {
        sideBarOpen: false,
        sideCartOpen: false,
      };
    default:
      return state;
  }
};
