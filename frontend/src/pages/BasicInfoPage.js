import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";

import InfoTable from '../components/BasicInfo/InfoTable';
import { ScaleDownAnimation } from '../animations/Animations'


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
          <Col xs={6} md={6}>
            <h1 style={{textAlign: "center"}}>Basic informations</h1>
          </Col>
        </Row>
        <ScaleDownAnimation>
          <Row>        
            <Col xs={6} md={6}>
              <InfoTable basicInfo = {basicInfo}/>
            </Col>
            <Col xs={6} md={6}>          
              <Image width="300" className="rounded mx-auto d-block" src={basicInfo.image_url} fluid/>
            </Col>
          </Row>
      </ScaleDownAnimation>
    </Container>
  )
}

export default BasicInfoPage
