import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AddProductAction from './actions/AddProductAction';
import SelectProviderDropdown from './SelectProviderDropdown'
import providersSelector from '../../selectors/providersSelector';
import AddProductRequest from '../../requests/AddProductRequest';

export default function AddProductForm(){
  const [productText, setProductText] = React.useState('');
  const [selectedProvider, setSelectedProvider] = React.useState('');
  const [productPrice, setProductPrice] = React.useState('');
  const [productStock, setProductStock] = React.useState('');

  const dispatch = useDispatch();

  const providers = useSelector(providersSelector);

  function handleProductTextChange(event){
    const value = event.target.value;
    setProductText(value);
  }

  function handleSelectedProviderChange(event){
    const value = event.target.value;
    setSelectedProvider(value);
  }

  function handleProductPriceChange(event){
    const value = event.target.value;
    setProductPrice(value);
  }

  function handleProductStockChange(event){
    const value = event.target.value;
    setProductStock(value);
  }

  async function handleFormSubmittion(event){
    event.preventDefault();
    const product = await new AddProductRequest(productText, selectedProvider, productPrice, productStock).send();
    const action = AddProductAction(product);
    dispatch(action);
    toast.success('Product added successully');
    resetForm();
  }

  function resetForm(){
    setProductText('');
    setSelectedProvider('');
    setProductPrice('');
    setProductStock('');
  }

  return (
    <div>
      <h3>Add new products</h3>
      <form onSubmit={handleFormSubmittion}>
        <Form.Group controlId="productText">
          <Form.Label>Product name:</Form.Label>
          <Form.Control
            type="text"
            value={productText}
            onChange={handleProductTextChange}
          />
        </Form.Group>
        <SelectProviderDropdown
          providers={providers}
          selectedProvider={selectedProvider}
          onProviderSelected={handleSelectedProviderChange}
        />
        <Form.Group controlId="productPrice">
          <Form.Label>Product price:</Form.Label>
          <Form.Control
            type="number"
            min="0"
            value={productPrice}
            onChange={handleProductPriceChange}
          />
        </Form.Group>
        <Form.Group controlId="productStock">
          <Form.Label>Stock:</Form.Label>
          <Form.Control
            type="number"
            min="0"
            value={productStock}
            onChange={handleProductStockChange}
          />
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
}