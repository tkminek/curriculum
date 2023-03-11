import React, { useState, useEffect } from 'react'
import EducationItem from './EducationItem';
import ListGroup from 'react-bootstrap/ListGroup';
const EducationList = () => {    

    let [EducationList, setEducationList] = useState([])
    useEffect(() => {
        getEducationList()
    },[])

    let getEducationList = async () => {
        let reseponse = await fetch("/api/education/")
        let data = await reseponse.json()
        setEducationList(data)
    }
  return (
    <ListGroup defaultActiveKey="0">
        {EducationList.map((item, index) => {
            return(
                    <EducationItem key={index} item={item}/>
            )
        })} 
    </ListGroup>
  )
}

export default EducationList
