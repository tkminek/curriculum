import React, {useState, useEffect} from 'react'


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
    <div>
      <ul>
        <li>{basicInfo.name}</li>
        <li>{basicInfo.surname}</li>
        <li>{basicInfo.degree}</li>
        <li>{basicInfo.birthdate}</li>
        <li>{basicInfo.address}</li>
        <li>{basicInfo.email}</li>
        <li>{basicInfo.telephone}</li>
      </ul>
    </div>
  )
}

export default BasicInfoPage
