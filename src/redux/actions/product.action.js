import { createActions} from "redux-actions";

export const fetchProducts = createActions({
  fetchProductsRequest: payload => payload,
  fetchProductsSuccess: payload => payload,
  fetchProductsFailure: err => err
});

const product = {
  fetchProducts
};

export default product;
