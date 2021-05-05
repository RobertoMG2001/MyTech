import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Provider from '../representations/Provider';

export default class GetProvidersRequest {
    async send() {
        const response = await axios.get(ApiConfig.endpoints.providers.get);
        const providersListResponse = response.data || [];
        return providersListResponse.map(provider => Provider.fromApiResponseProvider(provider));
    }
}