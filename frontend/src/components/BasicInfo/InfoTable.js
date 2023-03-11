import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const InfoTable = ({basicInfo}) => {
  return (
    <Table striped bordered hover>
        <tbody>
        <tr>
            <td>Name, surname:</td>
            <td>{basicInfo.degree} {basicInfo.name} {basicInfo.surname}</td>
        </tr> 
        <tr>
            <td>Birthdate:</td>
            <td>{basicInfo.birthdate}</td>
        </tr> 
        <tr>
            <td>Adress:</td>
            <td>{basicInfo.address}</td>
        </tr> 
        <tr>
            <td>Email:</td>
            <td>{basicInfo.email}</td>
        </tr> 
        <tr>
            <td>Telephone:</td>
            <td>{basicInfo.telephone}</td>
        </tr> 
        </tbody>
    </Table>
  )
}

export default InfoTable