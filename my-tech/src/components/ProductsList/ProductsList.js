import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Modal, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import productsSelector from '../../selectors/productsSelector';
import providersSelector from '../../selectors/providersSelector';
import productDeletedAction from './actions/productDeletedAction';
import productSoldAction from './actions/productSoldAction';
import productUpdatedAction from './actions/productUpdatedAction';
import DeleteProductRequest from '../../requests/DeleteProductRequest';
import UpdateProductRequest from '../../requests/UpdateProductRequest';
import ConfirmDeleteProductModal from './ConfirmDeleteProductModal';
import SelectProviderDropdown from '../AddProductForm/SelectProviderDropdown';
import ProductRow from './ProductRow';

export default function ProductsList(props){
    const products = useSelector(productsSelector);
    const providers = useSelector(providersSelector);

    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = React.useState(false);
    const [showUpdateModal, setShowUpdateModal] = React.useState(false);
    const [productToDelete, setProductToDelete] = React.useState(null);
    const [productToUpdate, setProductToUpdate] = React.useState(null);

    const [newProductText, setNewProductText] = React.useState('');
    const [newSelectedProvider, setNewSelectedProvider] = React.useState('');
    const [newProductPrice, setNewProductPrice] = React.useState('');
    const [newProductStock, setNewProductStock] = React.useState('');

    const dispatch = useDispatch();

    const updateModal = () => setShowUpdateModal(!showUpdateModal);

    //Product deletion methods
    async function handleProductDeletion() {
        await new DeleteProductRequest(productToDelete.id).send();
        const action = productDeletedAction(productToDelete);
        dispatch(action);
    }

    function confirmProductDeletion(product) {
        setProductToDelete(product);
        setShowDeleteConfirmationModal(true);
    }

    async function onProductDeletionConfirmed() {
        await handleProductDeletion();
        setProductToDelete(null);
        setShowDeleteConfirmationModal(false);
    }

    function onProductDeletionCanceled() {
        setProductToDelete(null);
        setShowDeleteConfirmationModal(false);
    }

    //Product sell
    async function handleProductSell(product){
        if(product.stock > 1){
            var newProductText = product.name;
            var newSelectedProvider = product.provider;
            var newProductPrice = product.price;
            var newProductStock = (product.stock) - 1;
            
            const soldProduct = await new UpdateProductRequest(product, newProductText, newSelectedProvider, newProductPrice, newProductStock).send();
            const action = productSoldAction(soldProduct);
            dispatch(action);
            toast.success('Purchase done. Thank you!');
        }
        else{
            toast.error('There are no products available');
        }
    }

    //Product update methods
    function startProductUpdate(product) {
        setProductToUpdate(product);
        setShowUpdateModal(true);
    }

    function handleNewProductTextChange(event){
        const value = event.target.value;
        setNewProductText(value);
    }
    
    function handleNewSelectedProviderChange(event){
        const value = event.target.value;
        setNewSelectedProvider(value);
    }
    
    function handleNewProductPriceChange(event){
        const value = event.target.value;
        setNewProductPrice(value);
    }
    
    function handleNewProductStockChange(event){
        const value = event.target.value;
        setNewProductStock(value);
    }
    
    async function handleUpdateFormSubmittion(event){
        event.preventDefault();
        const updatedProduct = await new UpdateProductRequest(productToUpdate, newProductText, newSelectedProvider, newProductPrice, newProductStock).send();
        const action = productUpdatedAction(updatedProduct);
        dispatch(action);
        toast.success('Product updated successully');
        resetForm();
    }

    function resetForm(){
        setNewProductText('');
        setNewSelectedProvider('');
        setNewProductPrice('');
        setNewProductStock('');
    }

    if(products.length === 0){
        return (
            <div> There are no products on stock </div>
        );
    }

    const productsRows = products.map(product => (
        <ProductRow
            key={product.id}
            product={product}
            onIntentionToDeleteProduct={confirmProductDeletion}
            onIntentionToUpdateProduct={startProductUpdate}
            onProductSell={handleProductSell}
        />
    ));

    return(
        <div>
            <ConfirmDeleteProductModal
                show={showDeleteConfirmationModal}
                onConfirm={onProductDeletionConfirmed}
                onCancel={onProductDeletionCanceled}
            />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Provider</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th colSpan="3"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {productsRows}
                </tbody>
            </Table>
            <Modal show={showUpdateModal}>
                <Modal.Header closeButton>
                    <h4>Modify product</h4>
                </Modal.Header>
                <Modal.Body>
                    
                    <div>
                        <form onSubmit={handleUpdateFormSubmittion}>
                            <Form.Group controlId="newProductText">
                            <Form.Label>New product name:</Form.Label>
                            <Form.Control
                                type="text"
                                //placeholder={product.name}
                                //defaultValue={product.name}
                                value={newProductText}
                                onChange={handleNewProductTextChange}
                            />
                            </Form.Group>
                            <SelectProviderDropdown
                                providers={providers}
                                //placeholder={product.provider}
                                //defaultValue={product.provider}
                                selectedProvider={newSelectedProvider}
                                onProviderSelected={handleNewSelectedProviderChange}
                            />
                            <Form.Group controlId="newProductPrice">
                            <Form.Label>New product price:</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                //placeholder={product.price}
                                //defaultValue={product.price}
                                value={newProductPrice}
                                onChange={handleNewProductPriceChange}
                            />
                            </Form.Group>
                            <Form.Group controlId="newProductStock">
                            <Form.Label>New product stock:</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                //placeholder={product.stock}
                                //defaultValue={product.stock}
                                value={newProductStock}
                                onChange={handleNewProductStockChange}
                            />
                            </Form.Group>
                            <Button
                                type="submit"
                                variant="warning"
                                onClick={updateModal}
                            >
                                Confirm
                            </Button>
                            <Button 
                                variant="danger" 
                                style={{marginLeft: '5%'}}
                                onClick={updateModal}
                            >
                                Cancel
                            </Button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
        
    );
}