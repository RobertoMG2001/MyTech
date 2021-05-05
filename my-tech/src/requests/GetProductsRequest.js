import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Product from '../representations/Product';

export default class GetProductsRequest {
    async send() {
        const response = await axios.get(ApiConfig.endpoints.products.get);
        const productsListResponse = response.data || [];
        return productsListResponse.map(product => Product.fromApiResponseProduct(product));
    }
}