import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from 'redux/actions';
import * as api from 'api';

function* fetchProductsSaga(action) {
  try {
    const products = yield call(api.fetchProducts);
    console.log(products.data)
    // yield put(actions.getProducts.getProductsSuccess(products.data));
  } catch (err) {
    console.error(err);
    // yield put(actions.getProducts.getProductsFailure(err));
  }
}

function* createProductSaga(action) {
  try {
    const product = yield call(api.createProduct, action.payload);
    yield put(actions.createProduct.createProductSuccess(product.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createProduct.createProductFailure(err));
  }
}

function* updateProductSaga(action) {
  try {
    const updatedProduct = yield call(api.updateProduct, action.payload);
    yield put(actions.updateProduct.updateProductSuccess(updatedProduct.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updateProduct.updateProductFailure(err));
  }
}

function* saga() {
  yield takeLatest(actions.getProducts.getProductsRequest, fetchProductsSaga);
  yield takeLatest(actions.createProduct.createProductRequest, createProductSaga);
  yield takeLatest(actions.updateProduct.updateProductRequest, updateProductSaga);
}

// generator function ES6

export default saga;
