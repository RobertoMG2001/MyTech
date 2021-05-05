import axios from 'axios';
import ApiConfig from '../ApiConfig';

export default class DeleteProviderRequest {
    constructor(providerID) {
        this.providerID = providerID;
    }

    send() {
        return axios.delete(ApiConfig.endpoints.providers.delete(this.providerID));
    }
}