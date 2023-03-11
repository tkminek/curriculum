import React from 'react'
import EducationList from '../components/Education/EducationList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const EducationPage = () => {

  return (
    
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <EducationList />
        </Col>
      </Row>            
    </Container>
  )
}

export default EducationPage
