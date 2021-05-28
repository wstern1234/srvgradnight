import React from 'react';
import NavBar from '../header';
import { Heading, Text } from '@chakra-ui/react';

const prizes = () => {
  return (
    <div>
      <NavBar />

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
      </style>
          
      <br />
      <br />

      <Heading fontFamily = 'Comfortaa'>Prizes</Heading>
          
      <br />
      <br />

      <Text
      fontFamily = 'Comfortaa'
      margin = 'auto 23%'> Raffle drawings every half hour from 9pm-12am. For the first hour, 
      winners will be announced on the small stage. From 10pm-12am winners will be announced on the main stage. </Text>
    </div>
  )
};

export default prizes;