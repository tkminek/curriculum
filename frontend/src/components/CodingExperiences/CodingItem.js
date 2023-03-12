import React, { useState } from 'react'
import { ScaleDownAnimation } from '../../animations/Animations';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBIcon
  } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

const CodingItem = ({item}) => {
  const [showMore, setShowMore] = useState(false);


  return (
    <ScaleDownAnimation>
      <MDBCard>
        <MDBCardImage style={{ height: '10rem' }}
            src={item.image_url}
            alt='...'
            position='top'
        />
        <MDBCardBody>
            <MDBCardTitle><b>{item.project_name}</b></MDBCardTitle>
            <MDBCardText>
                {showMore ? item.description : `${item.description.substring(0, 60)}`}
                <button className="btn" style={{ fontWeight: 'bold' }} onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show less" : "..."}
                </button> 
            </MDBCardText>
              <div className="d-grid gap-2">
              { item.git_url ?
                <Button floating style={{ backgroundColor: '#333333' }} href={item.git_url}>
                  <MDBIcon className='me-2' fab icon='github' /> gitHub
                </Button>
                :
                <Button floating style={{ backgroundColor: '#333333' }} href="">
                  Sensitive company data
                </Button>
              }
              </div>
        </MDBCardBody>
      </MDBCard>
    </ScaleDownAnimation>
  )
}

export default CodingItem
