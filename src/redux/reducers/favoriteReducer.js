import { TOGGLE_FAVORITE } from '../actions/productActions';

const initialState = [];

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const productId = action.payload;
      if (state.includes(productId)) {
        return state.filter((id) => id !== productId);
      } else {
        if (state.length < 5) {
          return [...state, productId];
        } else {
          return state;
        }
      }
    default:
      return state;
  }
};

export default favoriteReducer;
