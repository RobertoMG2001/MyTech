import { Container } from 'react-bootstrap';
import Footer from '../components/Router/Footer';

export default function HomePage() {
  return (
    <div className="home text-center">
      <Container style={{fontSize: '2em'}}>
          <h1>Welcome to MyTech</h1>
          <p>
            Any tech product you can imagine!
          </p>
      </Container>
      <Container>
        <img 
          src="https://www.ocu.org/-/media/ocu/images/home/tecnologia/no%20center%20of%20content/dispositivos_electronicos_1600x900.jpg?rev=61306e40-8585-476c-a695-69a3c871b27d&mw=660&hash=8910CEDB566091BCB11B15301BBD9784" 
          alt="Electronic devices"
        />
      </Container>
      <br />
      <Container style={{marginTop: '1%'}}>
        <Footer />
      </Container>
    </div>
  );
}