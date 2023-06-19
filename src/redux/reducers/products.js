import { INIT_STATE } from 'constant';
import { getProducts, getType, createProduct, updateProduct } from 'redux/actions';

export default function productsReducers(state = INIT_STATE.entity, action) {
  switch (action.type) {
    case getType(getProducts.getProductsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getProducts.getProductsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getProducts.getProductsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createProduct.createProductSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(updateProduct.updateProductSuccess):
      return {
        ...state,
        data: state.data.map((Product) =>
          Product._id === action.payload._id ? action.payload : Product
        ),
      };
    default:
      return state;
  }
}