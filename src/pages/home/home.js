import React from 'react';
import NavBar from '../header';
import './home.css';
import { Button, Heading, Text, Box, Center, OrderedList, ListItem } from '@chakra-ui/react';

const Home = (props) => {

  const [noGo, setNoGo] = React.useState(false);
  const [go, setGo] = React.useState(false);
  const [show, setShow] = React.useState(true);

  const noGoClick = () => {
    setNoGo(true);
    setShow(false);
  }

  const goClick = () => {
    setGo(true);
    setShow(false);
  }

  return (
    <div className = 'homeDiv'>

      <NavBar />

      <br />
      <br />

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
      </style>
      
      <Heading fontFamily = 'Comfortaa'>Seniors...</Heading>

      <br />

      <Text
      className = 'introPara'
      fontFamily = 'Comfortaa'
      display = 'block'>
      CONGRATULATIONS AND WELCOME TO GRAD NIGHT! We have a FUN event planned filled with food, 
      activities, and music! This website has all the information you need.</Text>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Center>

        <Heading fontFamily = 'Comfortaa' as = 'h3' size="lg">
          BEFORE YOU GO:
        </Heading>

        <br />
        <br />
        <br />

        </Center>




        <Box
        fontFamily = 'Comfortaa'
        margin = 'auto 10%'>


        <OrderedList
        className = 'orderList'
        spacing = {3}>

          <ListItem> All waivers must be filled out prior to entry. (ask your parents) </ListItem>
          <ListItem> COVID Waiver - found ON THIS WEBSITE ON THE BOTTOM OF THIS PAGE.&nbsp;
            <span className = 'boldtxt'>TAKE A SCREEN SHOT. YOU WILL NEED TO SHOW THIS AT CHECK IN 
            OR NO ADMITTANCE.</span> </ListItem>
          <ListItem> Check In - You will need your student ID to get in. </ListItem>
          <ListItem> You will need a mask to get in. </ListItem>
          <ListItem> Raffle - At check in you get 10 tickets with your name on each one. Use these 
            for the prize basket raffles, located over in front of D building. </ListItem>
          <ListItem> Breathalyzer - EVERY student will be checked! No alcohol or drugs. If you are under 
            the influence, you won't be let in, and can get kicked out. NO REFUNDS. </ListItem>
          <ListItem> DRESS WARMLY: There will be a coat check, so bring layers. We are NOT allowing bags. 
            If you have prescription medication, label it with your name and what it is. It must be checked 
            in and noted by a volunteer. It will be put in the First Aid tent. (epipens, etc) </ListItem>
          <ListItem> No in and out privileges. </ListItem>
          <ListItem> Come HUNGRY - there will be so many different types of food to choose from. </ListItem>

        </OrderedList>



        </Box>

      

      <br />
      <br />
      <br />

      <div style={{ display: show ? "block" : "none" }}>

        <Text
        margin = 'auto 10%'
        fontFamily = 'Comfortaa'>After looking over the&nbsp;
        <a href = 'https://docs.google.com/document/d/1PGLzhVBJu3R9Seeoiu-XeHDk56CWjnRlFpAtcmNNGS4/edit'
        rel="noreferrer"
        target = '_blank'
        action = 'https://docs.google.com/document/d/1PGLzhVBJu3R9Seeoiu-XeHDk56CWjnRlFpAtcmNNGS4/edit'>
        <span className = 'HQN_Text'>health questionnaire</span>
        </a>
        , are any of the questions true?</Text>

        <br />
        
        <Button margin = 'auto 4px' colorScheme="green" variant = 'outline' width = '15%' fontFamily = 'Comfortaa' onClick = {noGoClick}>
          Yes
        </Button>

        <Button margin = 'auto 4px' colorScheme="green" variant = 'outline' width = '15%' fontFamily = 'Comfortaa' onClick = {goClick}>
          No
        </Button>

      </div>


      <Center>
        <div style={{ display: go ? "block" : "none" }}>

          <Box bg="#00CC29" p={10} color="white">
            <p>Have fun!</p>
          </Box>

        </div>
      </Center>

      <Center>
        <div style={{ display: noGo ? "block" : "none" }}>

          <Box bg="tomato" p={10} color="white">
            <p>We regret to inform you that, per our health guidelines, you aren't allowed to attend</p>
          </Box>

        </div>
      </Center>


    <br />
      
    </div>
    )
};

export default Home;