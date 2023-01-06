import React from 'react'
import TextTyping from '../components/Home/TextTyping'
import Alert from 'react-bootstrap/Alert';

const HomePage = () => {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <TextTyping text={"ahooooj ja jsem Tom :)"}/>
    </Alert>
  )
}

export default HomePage
