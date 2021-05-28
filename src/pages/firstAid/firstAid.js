import React from 'react';
import NavBar from '../header';
import { Heading, Text } from '@chakra-ui/react';

const firstAid = () => {
  return (
    <div>
      <NavBar />

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
      </style>
          
      <br />
      <br />

      <Heading fontFamily = 'Comfortaa'>First Aid</Heading>
          
      <br />
      <br />

      <Text
      fontFamily = 'Comfortaa'
      margin = 'auto 15%'> There will be certified medical staff on hand throughout the night. 
      The First Aid tent will be near B building. </Text>
    </div>
  )
};

export default firstAid;