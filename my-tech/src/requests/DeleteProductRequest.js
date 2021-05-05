import axios from 'axios';
import ApiConfig from '../ApiConfig';

export default class DeleteProductRequest {
    constructor(productId) {
        this.productId = productId;
    }

    send() {
        return axios.delete(ApiConfig.endpoints.products.delete(this.productId));
    }
}