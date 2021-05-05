export default class Product{
    constructor(id, name, provider, price, stock){
        this.id = id;
        this.name = name;
        this.provider = provider;
        this.price = price;
        this.stock = stock;
    }

    static fromStateProduct(product){
        return new Product(product.id, product.name, product.provider, product.price, product.stock);
    }

    static fromApiResponseProduct(response){
        return new Product(response.id, response.name, response.provider, response.price, response.stock);
    }
}