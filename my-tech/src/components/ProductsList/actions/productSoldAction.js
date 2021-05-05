export default function productSoldAction(product) {
    return {
        type: PRODUCT_SOLD,
        payload: product
    };
}

export const PRODUCT_SOLD = 'PRODUCT_SOLD';

