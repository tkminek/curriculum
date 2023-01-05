import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const JobItem = ({item}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <ListGroup.Item>
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick = {() => setShow(!show)}>
                {item.position}    
            </Button>
            <div>
                {show && 
                    <div>
                    <h3>Company : {item.company}</h3> 
                    <h3>description : {item.description}</h3> 
                    <h3>start_date : {item.start_date}</h3> 
                    <h3>end_date : {item.end_date}</h3>  
                    </div>
                }
            </div>
        </div> 
    </ListGroup.Item>
  )
}

export default JobItem
