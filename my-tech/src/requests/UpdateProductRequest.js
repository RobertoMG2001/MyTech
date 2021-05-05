import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Product from '../representations/Product';

export default class UpdateProductRequest {
    constructor(product, newProductText, newSelectedProvider, newProductPrice, newProductStock) {
        this.product = product;
        this.newProductText = newProductText;
        this.newSelectedProvider =newSelectedProvider;
        this.newProductPrice = newProductPrice;
        this.newProductStock = newProductStock;
    }

    getRequestUrl() {
        const productId = this.product.id;
        return ApiConfig.endpoints.products.updateProduct(productId);
    }

    async send() {
        const requestUrl = this.getRequestUrl();
        const response = await axios.put(requestUrl, {
            newProductText: this.newProductText,
            newSelectedProvider: this.newSelectedProvider,
            newProductPrice: this.newProductPrice,
            newProductStock: this.newProductStock
        });

        return Product.fromApiResponseProduct(response.data);
    }
}