import React, { useState } from 'react'

const JobItem = ({item}) => {
    const [show, setShow] = useState(false);
  return (
    <div>
        <button type="button" onClick = {() => setShow(!show)}>
            {item.position}    
        </button>
        <div>
            {show && 
                <div>
                <h3>Company : {item.company}</h3> 
                <h3>description : {item.description}</h3> 
                <h3>start_date : {item.start_date}</h3> 
                <h3>end_date : {item.end_date}</h3>  
                </div>
            }
        </div> 
    </div>
  )
}

export default JobItem
