import { Button } from 'react-bootstrap';

export default function ProviderRow(props) {
    const { provider, onIntentionToDeleteProvider } = props;

    return (
        <tr key={provider.id}>
            <td>{provider.name}</td>
            <td>
                <Button 
                    variant="danger" 
                    onClick={() => onIntentionToDeleteProvider(provider)}> 
                    Delete provider
                </Button>
            </td>
        </tr>
    );
}