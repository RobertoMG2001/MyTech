export default function productUpdatedAction(product) {
    return {
        type: PRODUCT_UPDATED,
        payload: product
    };
}

export const PRODUCT_UPDATED = 'PRODUCT_UPDATED';