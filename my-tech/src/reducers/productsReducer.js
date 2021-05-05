import { PRODUCT_ADDED } from '../components/AddProductForm/actions/AddProductAction';
import { PRODUCT_DELETED } from '../components/ProductsList/actions/productDeletedAction';
import { PRODUCT_SOLD } from '../components/ProductsList/actions/productSoldAction';
import { PRODUCT_UPDATED } from '../components/ProductsList/actions/productUpdatedAction';
import { PRODUCTS_LOADED } from '../StartupRunner';

const initialState = [];

export default function productsReducer(productsState = initialState, action) {
  switch (action.type) {
    case PRODUCT_ADDED:
      return [
        ...productsState,
        action.payload
      ];
    case PRODUCTS_LOADED:
      return [
        ...action.payload
      ];
    case PRODUCT_SOLD:
      const soldProduct = action.payload;
      return productsState.map(product => {
        if (product.id === soldProduct.id) {
          return soldProduct;
        }
        return product;
      });
    case PRODUCT_UPDATED:
      const updatedProduct = action.payload;
      return productsState.map(product => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });
    case PRODUCT_DELETED:
      return productsState.reduce((accumulator, product) => {
        if (product.id !== action.payload.id) {
          return [
            ...accumulator,
            product
          ];
        }
        return accumulator;
      }, []);
    default:
      return productsState;
  }
}
