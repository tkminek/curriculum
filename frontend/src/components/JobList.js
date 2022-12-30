import React, { useState, useEffect } from 'react'
import JobItem from './JobItem';

const JobList = () => {
    const [show, setShow] = useState(false);

    let [jobList, setJobList] = useState([])
    useEffect(() => {
        getJobList()
    },[])

    let getJobList = async () => {
        let reseponse = await fetch("/api/job/")
        let data = await reseponse.json()
        console.log("data:",data)
        setJobList(data)
    }
  return (
    <div>
        {jobList.map((item, index) => {
            return(
                    <JobItem key={index} item={item}/>
            )
        })} 
    </div>
  )
}

export default JobList
