export const PRODUCT_ADDED = 'PRODUCT_ADDED';

export default function addProductAction(product){
    return{
        type: PRODUCT_ADDED,
        payload: product
    };
}