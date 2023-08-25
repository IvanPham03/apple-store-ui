import { takeLatest, call, put } from "redux-saga/effects";
import actions from "redux/actions";
import * as api from 'api'

function* fetchProducts(action) {
  try {
    // convert to query
    const products = yield call(api.fetchProducts, action.payload);
    yield put(actions.product.fetchProducts.fetchProductsSuccess(products.data)); // save data from response to store redux
   } catch (error) {
    console.log(error)
    yield put(actions.product.fetchProducts.fetchProductsFailure(error));
  }
}

function* product() {
  yield takeLatest(actions.product.fetchProducts.fetchProductsRequest, fetchProducts);
}

export default product;
