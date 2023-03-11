import React, { useState, useEffect } from 'react'
import CodingItem from '../CodingExperiences/CodingItem';
import ListGroup from 'react-bootstrap/ListGroup';
import {
    MDBRow,
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
    <MDBRow className='row-cols-2 row-cols-md-2 g-4'>      
        {CodingList.map((item, index) => {
            return(
                    <CodingItem key={index} item={item}/>
            )
        })}
    </MDBRow>
  )
}

export default CodingList
