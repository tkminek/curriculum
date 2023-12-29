import React from 'react'
import JobList from '../components/Job/JobList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const JobPage = () => {
  return (    
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <h1 style={{textAlign: "center"}}>Possitions</h1>
        <br></br>
        </Col>        
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <JobList />
        </Col>
      </Row>            
    </Container>
  )
}

export default JobPage
