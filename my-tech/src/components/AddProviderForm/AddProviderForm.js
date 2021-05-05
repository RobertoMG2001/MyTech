import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import addProviderAction from './actions/AddProviderAction';
import AddProviderRequest from '../../requests/AddProviderRequest';

export default function AddProviderForm(){
  const [providerName, setProviderName] = React.useState('');
  const dispatch = useDispatch();

  function handleProviderNameChange(event){
    setProviderName(event.target.value);
  }

  async function handleFormSubmittion(event){
    event.preventDefault();
    const provider = await new AddProviderRequest(providerName).send();
    const action = addProviderAction(provider);
    dispatch(action);
    toast.success('Provider added successfully');
    resetForm();
  }

  function resetForm(){
    setProviderName('');
  }

  return (
    <div>
      <h2>Add a Provider</h2>
      <form onSubmit={handleFormSubmittion}>
        <Form.Group controlId="providerName">
          <Form.Label>Provider</Form.Label>
          <Form.Control
            type="text"
            value={providerName}
            onChange={handleProviderNameChange}
          />
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
        >
          Add Provider
        </Button>
      </form>
    </div>
  );
}