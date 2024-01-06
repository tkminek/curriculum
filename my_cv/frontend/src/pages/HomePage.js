import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useTypewriter } from 'react-simple-typewriter';
import PythonLogo from '../components/Home/PythonLogo';

const HomePage = () => {
  const [text] = useTypewriter({
    words: ["Where I would like to introduce myself and potentially reach out to future employers."],
    loop: 1,
    typeSpeed: 30,
  })
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '50vh' }}>
      <Row>
        <Col md={6}>
          <Alert variant="light" style={{ marginBottom: '20px' }}>
            <Alert.Heading>Hello and welcome to my profile page.</Alert.Heading>
            <p>{text}</p>
          </Alert>
        </Col>
        <Col md={6}>
          <PythonLogo />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
