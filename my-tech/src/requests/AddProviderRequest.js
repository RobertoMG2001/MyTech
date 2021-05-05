import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Provider from '../representations/Provider';

export default class AddProviderRequest {
    constructor(name) {
        this.name = name;
    }

    async send() {
        const response = await axios.post(ApiConfig.endpoints.providers.add, {
            name: this.name
        });
        return Provider.fromApiResponseProvider(response.data);
    }
}