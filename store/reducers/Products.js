const initialState = {
  cartItems: 0,
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProducts: {},
  loading: true,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
