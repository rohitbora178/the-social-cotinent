import axios from 'axios';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';


export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const toggleFavorite = (productId) => ({
  type: TOGGLE_FAVORITE,
  payload: productId,
});


export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      dispatch(fetchProductsSuccess(response.data.products));
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  };
};





