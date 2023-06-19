import { combineReducers } from 'redux';
import products from 'redux/reducers/products';
import modal from 'redux/reducers/modal';

export default combineReducers({
  products,
  modal,
});
