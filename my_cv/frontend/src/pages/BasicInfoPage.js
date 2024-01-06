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
<Container fluid style={{ display: 'flex', flexDirection: 'column' }}>
  <Row style={{ marginTop: '20px' }}>
    <Col xs={12} md={6} style={{ marginTop: '60px' }}>
      <h1 style={{ textAlign: "center", marginBottom: '10px' }}>Basic informations</h1>
      <InfoTable basicInfo={basicInfo} style={{ marginBottom: '20px' }} />
    </Col>
    <Col xs={12} md={6}>
      <ScaleDownAnimation>
        <Image className="rounded mx-auto d-block img-fluid" src={basicInfo.image_url} alt="Basic Info" style={{ maxWidth: '50%' }} />
      </ScaleDownAnimation>
    </Col>
  </Row>
</Container>
  )
}

export default BasicInfoPage
