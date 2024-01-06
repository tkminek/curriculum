import React from 'react'
import CodingList from '../components/CodingExperiences/CodingList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CodingPage = () => {
  return (
    <Container fluid>
      <Row className='justify-content-center'>
        <Col md={9}>
          <CodingList />
        </Col>
      </Row>
    </Container>
  )
}

export default CodingPage
