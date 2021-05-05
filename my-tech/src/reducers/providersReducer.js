import { PROVIDER_ADDED } from '../components/AddProviderForm/actions/AddProviderAction';
import { PROVIDER_DELETED } from '../components/ProvidersList/actions/providerDeletedAction';
import { PROVIDERS_LOADED } from '../StartupRunner';

const initialState = [];

export default function providersReducer(providersState = initialState, action) {
  switch (action.type) {
    case PROVIDER_ADDED:
      return [
        ...providersState,
        action.payload
      ];
      case PROVIDERS_LOADED:
      return [
        ...action.payload
      ];
    case PROVIDER_DELETED:
      return providersState.reduce((accumulator, provider) => {
        if (provider.id !== action.payload.id) {
          return [
            ...accumulator,
            provider
          ];
        }
        return accumulator;
      }, []);
    default:
      return providersState;
  }
}