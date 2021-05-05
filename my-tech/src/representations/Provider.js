export default class Provider {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    static fromStateProvider(provider){
        return new Provider(provider.id, provider.name);
    }

    static fromApiResponseProvider(response){
        return new Provider(response.id, response.name);
    }
}


