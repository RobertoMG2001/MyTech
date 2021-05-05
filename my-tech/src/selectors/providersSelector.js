import Provider from "../representations/Provider";

export default function providersSelector(state) {
    return state.providers.map(provider => Provider.fromStateProvider(provider))
}
