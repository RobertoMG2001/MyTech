import { Form } from 'react-bootstrap';

export default function SelectProviderDropdown(props) {
  const { providers, selectedProvider, onProviderSelected } = props;

  const options = providers.map((provider, index) => (
    <option key={index}>{provider.name}</option>
  ));

  return (
    <div>
      <Form.Group controlId="selectProviderDropdown">
        <Form.Label>Provider for this product:</Form.Label>
        <Form.Control
          as="select"
          value={selectedProvider}
          onChange={onProviderSelected}
        >
          <option></option>
          {options}
        </Form.Control>
      </Form.Group>
    </div>
  );
}