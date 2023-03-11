import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { ScaleDownAnimation } from '../../animations/Animations';

const EducationItem = ({item}) => {
  return (
    <div className="d-grid gap-2">
        <h1>{item.type}</h1>
        <ScaleDownAnimation>
            <Table striped bordered hover>
                <tbody>
                <tr>
                    <td>Name:</td>
                    <td>{item.name}</td>
                </tr> 
                <tr>
                    <td>Faculty:</td>
                    <td>{item.faculty}</td>
                </tr> 
                <tr>
                    <td>Deparment:</td>
                    <td>{item.department}</td>
                </tr> 
                <tr>
                    <td>Description:</td>
                    <td>{item.comment}</td>
                </tr>
                <tr>
                    <td>Start date:</td>
                    <td>{item.start_date}</td>
                </tr> 
                <tr>
                    <td>End date:</td>
                    <td>{item.end_date}</td>
                </tr>  
                </tbody>
            </Table>
        </ScaleDownAnimation>
    </div>
  )
}

export default EducationItem
