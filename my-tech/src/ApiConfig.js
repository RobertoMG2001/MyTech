export default class ApiConfig {
    static baseUrl = 'https://localhost:44353';

    static get endpoints() {
        const productsBasePath = `${ApiConfig.baseUrl}/api/products`;
        const providersBasePath = `${ApiConfig.baseUrl}/api/providers`;
        return {
            products: {
                basePath: productsBasePath,
                add: productsBasePath,
                get: productsBasePath,
                updateProduct: id => `${productsBasePath}/${id}`,
                delete: id => `${productsBasePath}/${id}`
            },
            providers: {
                basePath: providersBasePath,
                get: providersBasePath,
                add: providersBasePath,
                delete: id => `${providersBasePath}/${id}`
            }
        };
    }
}