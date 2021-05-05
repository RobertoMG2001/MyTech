export default function providerDeletedAction(provider) {
    return {
        type: PROVIDER_DELETED,
        payload: provider
    };
}

export const PROVIDER_DELETED = 'PROVIDER_DELETED';