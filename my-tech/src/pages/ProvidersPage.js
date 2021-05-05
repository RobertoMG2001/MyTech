import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import AddProviderForm from '../components/AddProviderForm';
import ProvidersList from '../components/ProvidersList';
import Footer from '../components/Router/Footer';

export default function ProvidersPage() {
  return (
    <div className="providers">
      <Jumbotron>
        <AddProviderForm />
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <ProvidersList />
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Footer />
      </Container>
    </div>
  );
}