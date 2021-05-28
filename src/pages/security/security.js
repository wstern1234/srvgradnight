import React from 'react';
import NavBar from '../header';
import { Heading, Text } from '@chakra-ui/react';

const security = () => {
  return (
    <div>
      <NavBar />

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
      </style>
          
      <br />
      <br />

      <Heading fontFamily = 'Comfortaa'>Security</Heading>
          
      <br />
      <br />

      <Text
      fontFamily = 'Comfortaa'
      margin = 'auto 10%'> Hired and volunteer security will be patrolling the campus. They will 
      be clearly identified if you need assistance. </Text>
    </div>
  )
};

export default security;