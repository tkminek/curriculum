import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useTypewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion/dist/framer-motion"

const HomePage = () => {
  const [text] = useTypewriter({
    words: ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque porta. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Praesent vitae arcu tempor neque lacinia pretium. Sed convallis magna eu sem. Integer malesuada."],
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
