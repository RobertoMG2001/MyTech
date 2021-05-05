import Product from "../representations/Product";

export default function productsSelector(state) {
    return state.products.map(product => Product.fromStateProduct(product))
}