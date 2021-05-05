export default function productDeletedAction(product) {
    return {
        type: PRODUCT_DELETED,
        payload: product
    };
}

export const PRODUCT_DELETED = 'PRODUCT_DELETED';