export const PROVIDER_ADDED = 'PROVIDER_ADDED';

export default function addProviderAction(provider) {
  return {
    type: PROVIDER_ADDED,
    payload: provider
  };
}