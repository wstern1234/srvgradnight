import React from 'react';
import NavBar from '../header';
import {Heading, Center, Text} from '@chakra-ui/react';
import nightMap from './PreGradNightMap.png';
import evacMap from './evacMap.jpg';
import './nightMap.css';

const map = () => {
  return (
    <div position = 'relative' width = '100%'>
      <NavBar />

      <br />

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
      </style>

      <Heading fontFamily = 'Comfortaa' fontSize = '40px'>MAIN MAP</Heading>

      <Center>
        <img
          className = 'maps'
          width = '1000px'
          src = {nightMap}
          alt = "night map"
        />
      </Center>

      <Text fontFamily = 'Comfortaa'>Coming Soon!</Text>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <Heading fontFamily = 'Comfortaa' fontSize = '40px'>EVACUATION MAP</Heading>

      <Center>
        <img
          className = 'maps'
          width = '1000px'
          src = {evacMap}
          alt = "evac map"
        />
      </Center>
      
    </div>
  )
};

export default map;