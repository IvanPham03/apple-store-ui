import product from "./product.sagas";

function* saga() {
  yield product();
}

// generator function ES6

export default saga;
