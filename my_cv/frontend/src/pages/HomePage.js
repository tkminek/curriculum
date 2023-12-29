import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useTypewriter } from 'react-simple-typewriter';


const HomePage = () => {
  const [text] = useTypewriter({
    words: ["Where I would like to introduce myself and potentially reach out to future employers."],
    loop: 1,
    typeSpeed: 30,
  })
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Alert variant="light">
            <Alert.Heading>Hello and welcome to my profile page.</Alert.Heading>
            <p>
              {text}
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
