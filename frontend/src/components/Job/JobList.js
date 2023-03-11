import React, { useState, useEffect } from 'react'
import JobItem from './JobItem';
import ListGroup from 'react-bootstrap/ListGroup';

const JobList = () => {    

    let [jobList, setJobList] = useState([])
    useEffect(() => {
        getJobList()
    },[])

    let getJobList = async () => {
        let reseponse = await fetch("/api/job/")
        let data = await reseponse.json()
        setJobList(data)
    }
  return (
    <ListGroup defaultActiveKey="0">
        {jobList.map((item, index) => {
            return(
                    <>
                    <JobItem key={index} item={item}/>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    </>
            )
        })} 
    </ListGroup>
  )
}

export default JobList
