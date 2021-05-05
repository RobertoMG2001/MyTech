import React from 'react';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import AddProductForm from '../components/AddProductForm';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Router/Footer';

export default function ProductsPage() {
  return (
    <div className="products">
      <Jumbotron>
        <AddProductForm />
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <ProductsList />
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