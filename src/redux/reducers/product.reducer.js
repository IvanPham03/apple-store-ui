import { INIT_STATE } from "constant";
import product from "redux/actions/product.action";
import getType from "redux/actions/function";
export default function productsReducers(state = INIT_STATE.entity, action) {
  switch (action.type) {
    case getType(product.fetchProducts.fetchProductsRequest):
      return {
        ...state,
        isLoading: true
      };
    case getType(product.fetchProducts.fetchProductsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case getType(product.fetchProducts.fetchProductsFailure):
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
