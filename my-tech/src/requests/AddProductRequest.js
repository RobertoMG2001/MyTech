import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Product from '../representations/Product';

export default class AddProductRequest {
    constructor(productText, selectedProvider, productPrice, productStock) {
        this.productText = productText;
        this.selectedProvider = selectedProvider;
        this.productPrice = productPrice;
        this.productStock = productStock;
    }

    async send() {
        const response = await axios.post(ApiConfig.endpoints.products.add, {
            productText: this.productText,
            selectedProvider: this.selectedProvider,
            productPrice: this.productPrice,
            productStock: this.productStock
        });
        return Product.fromApiResponseProduct(response.data);
    }
}