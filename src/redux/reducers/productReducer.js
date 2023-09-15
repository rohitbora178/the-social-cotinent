import { FETCH_PRODUCTS_SUCCESS, TOGGLE_FAVORITE } from '../actions/productActions';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case TOGGLE_FAVORITE:
      const productId = action.payload;
      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            isFavorite: !product.isFavorite,
          };
        }
        return product;
      });
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
