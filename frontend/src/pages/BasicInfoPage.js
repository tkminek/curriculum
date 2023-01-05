import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import photo from "../images/photo.png"
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';


const BasicInfoPage = () => {

    let [basicInfo, setBasicInfo] = useState([])
    useEffect(() => {
        getBasicInfo()
    },[])

    let getBasicInfo = async () => {
        let reseponse = await fetch("/api/basic/")
        let data = await reseponse.json()
        setBasicInfo(data)
    }
  return (
    <Container fluid>
      <Row>
        <Col >
          <h1>
              Basic informations
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
        <Col>          
          <Image src={photo} fluid/>
        </Col>
      </Row>
    </Container>
  )
}

export default BasicInfoPage
