import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getProducts = createActions({
  getProductsRequest: undefined,
  getProductsSuccess: (payload) => payload,
  getProductsFailure: (err) => err,
});

export const createProduct = createActions({
  createProductRequest: (payload) => payload,
  createProductSuccess: (payload) => payload,
  createProductFailure: (err) => err,
});

export const updateProduct = createActions({
  updateProductRequest: (payload) => payload,
  updateProductSuccess: (payload) => payload,
  updateProductFailure: (err) => err,
});

export const showModal = createAction('SHOW_CREATE_PRODUCT_MODAL');
export const hideModal = createAction('HIDE_CREATE_PRODUCT_MODAL');

/*
  getType(getProducts.getProductSuccess)
  =>  
  {
    type: 'getProductSuccess',
    payload: {
      name: 'Test'
    }
  }
  */
