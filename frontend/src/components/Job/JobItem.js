import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { ScaleDownAnimation } from '../../animations/Animations';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const JobItem = ({item}) => {
    const [show, setShow] = useState(false);



  return (
    <ListGroup.Item>
        <div className="d-grid gap-2">
            <Card style={{ width: '18rem', border: "0" }}>
                <Card.Body>
                <Card.Title>{item.position}</Card.Title>
                <Card.Text>{item.company}</Card.Text>
                    <Button variant="dark" size="sm" onClick = {() => setShow(!show)}>
                    More info   
                    </Button>
                </Card.Body>
            </Card>
            <Container>
                {show && 
                    <ScaleDownAnimation>
                    <p>{item.description}</p>
                    <p>{item.start_date} / {item.end_date}</p>
                </ScaleDownAnimation>
                }
            </Container>
        </div>
    </ListGroup.Item>
  )
}

export default JobItem
