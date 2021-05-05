import GetProvidersRequest from './requests/GetProvidersRequest';
import GetProductsRequest from './requests/GetProductsRequest';

export default class StartupRunner {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    async run() {
        await this.loadProviders();
        await this.loadProducts();
    }

    async loadProviders() {
        const providers = await new GetProvidersRequest().send();
        this.dispatch({
            type: PROVIDERS_LOADED,
            payload: providers
        });
    }

    async loadProducts() {
        const products = await new GetProductsRequest().send();
        this.dispatch({
            type: PRODUCTS_LOADED,
            payload: products
        });
    }
}

export const PROVIDERS_LOADED = 'PROVIDERS_LOADED';
export const PRODUCTS_LOADED = 'PRODUCTS_LOADED';