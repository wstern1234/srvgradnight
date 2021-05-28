import React from 'react';
import NavBar from '../header';
import { Heading, Text } from '@chakra-ui/react';

const casino = () => {
  return (
    <div>
      <NavBar />

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
      </style>
          
      <br />
      <br />

      <Heading fontFamily = 'Comfortaa'>Casino</Heading>
          
      <br />
      <br />

      <Text
      fontFamily = 'Comfortaa'
      margin = 'auto 10%'>Tournament winners are announced on the main stage every hour, starting at 10pm.</Text>
    </div>
  )
};

export default casino;