import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import providersReducer from './providersReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  providers: providersReducer
});

export default rootReducer;