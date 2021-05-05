import { Button } from 'react-bootstrap';

export default function ProductRow(props) {
    const { product, onIntentionToDeleteProduct, onIntentionToUpdateProduct, onProductSell } = props;

    return (
        <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.provider}</td>
            <td>${product.price}</td>
            <td>{product.stock}</td>
            <td>
                <Button 
                    variant="danger"
                    onClick={() => onIntentionToDeleteProduct(product)}>  
                    Delete 
                </Button>
            </td>
            <td>
                <Button 
                    variant="warning"
                    onClick={() => onIntentionToUpdateProduct(product)}> 
                    Modify 
                </Button>
            </td>
            <td>
                <Button variant="info"
                    onClick={() => onProductSell(product)}> 
                    Sell one 
                </Button>
            </td>
        </tr>
    );
}