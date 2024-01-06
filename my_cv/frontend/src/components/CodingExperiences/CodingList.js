import React, { useState, useEffect } from 'react'
import CodingItem from '../CodingExperiences/CodingItem';
import ListGroup from 'react-bootstrap/ListGroup';
import {
    MDBRow,MDBCol
  } from 'mdb-react-ui-kit';

const CodingList = () => {    

    let [CodingList, setCodingList] = useState([])
    useEffect(() => {
        getCodingList()
    },[])

    let getCodingList = async () => {
        let reseponse = await fetch("/api/project/")
        let data = await reseponse.json()
        setCodingList(data)
    }
  return (   
    <MDBRow className='g-4'>
      {CodingList.map((item, index) => (
        <MDBCol key={index} lg={4} md={6}>
          <CodingItem item={item} />
        </MDBCol>
      ))}
    </MDBRow>
  )
}

export default CodingList
