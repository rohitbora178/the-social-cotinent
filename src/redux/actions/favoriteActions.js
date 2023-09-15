import { TOGGLE_FAVORITE } from './productActions';

export const toggleFavorite = (productId) => ({
  type: TOGGLE_FAVORITE,
  payload: productId,
});
