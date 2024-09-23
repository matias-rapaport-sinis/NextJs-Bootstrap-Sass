import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <Container style={{height : "100vh"}} className='h-100%'>
      <Row>
        <Col> TExto normal</Col>
        <Col>
          {[
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
            
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>))}
        </Col>
      </Row>
      <Row>
        <Col> <p className="alpha"> Este color </p></Col>
        <Col> <p style={{color : "var(--bs-pink)"}}> Este color </p></Col>
        <Col> <p className='fs-1'> Este color </p></Col>

        <Col> 
        <Button variant="primary">Primary</Button>{' '}
      <Button variant="pink">Secondary</Button>
        </Col>
      </Row>
      <Row className='p-1'>
        <Button variant="custom-color">Primary</Button>
      </Row>
    </Container>
  );
}
