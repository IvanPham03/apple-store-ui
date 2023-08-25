import { combineReducers } from 'redux';
import productsReducers from 'redux/reducers/product.reducer';

// use combineReducers to create a single root reducer out of many.
export default combineReducers({
  productsReducers,
});
