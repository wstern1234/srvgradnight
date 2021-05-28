import React from 'react';
import NavBar from '../header';
import { Heading, Text, Center, UnorderedList, ListItem } from '@chakra-ui/react';

const activities = () => {
  return (
    <div>
      <NavBar />

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
      </style>
          
      <br />

      <div margin = 'auto 2%'>

        <Heading as='h2' size='2xl' color = '#0000FF' fontFamily = 'Nunito'>Schedule</Heading>

        <br />

        <Text fontSize='md' fontFamily = 'Comfortaa'>So much to do and see! Here’s a list of food and activities. Have a blast!</Text>
            
        <br />
        <br />
        <br />
        <br />

        <Heading as='h2' size='lg' color = '#0000FF' fontFamily = 'Nunito'>Food - So many choices!</Heading>

        <br />

        <Text fontSize='sm' fontFamily = 'Nunito'>8:00pm-10:00pm</Text>

        <Center>
        
        <UnorderedList>
          <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Aloha Café (Polynesian)&emsp;&emsp;Commons Wall</ListItem>
          
          <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Cabo Cantina (Mexican-with a Nacho Cart)&emsp;&emsp;&emsp;D Hall</ListItem>
          
          <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Mediterranean Food Court (Italian and Greek)&emsp;&emsp;B Hall</ListItem>
          
          <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Boot Scoot BBQ/Nashville BBQ&emsp;&emsp;&emsp;Near PAC</ListItem>
          
          <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Sando Ramon Snack/Sandwich Stop&emsp;&ensp;ESRV Sports Zone</ListItem>
        </UnorderedList>

        </Center>

        <br />

        <Text fontSize='sm' fontFamily = 'Nunito'>10:00pm-1:00am Desserts and Sweets Open</Text>
        <Text fontSize='sm' fontFamily = 'Nunito'>Sweet Treats and Coffee Bar&emsp;&ensp;Oak Tree</Text>


        <Center>

        <UnorderedList>
          <ListItem fontSize='sm' textAlign = 'left' fontFamily = 'Comfortaa'>Churro Cart&emsp;&emsp;Cabo Cantina</ListItem>
          <ListItem fontSize='sm' textAlign = 'left' fontFamily = 'Comfortaa'>Dole Whips&emsp;&emsp;Aloha Café Commons Wall</ListItem>
        </UnorderedList>

        </Center>

        <br />

        <Text fontSize='sm' fontFamily = 'Nunito'>MIDNIGHT PIZZA ARRIVES!</Text>

        
        <Text fontSize='sm' fontFamily = 'Comfortaa'>2 locations:</Text>
        <Text fontSize='sm' fontFamily = 'Comfortaa'>Movie theatre/ESRV Zone</Text>
        <Text fontSize='sm' fontFamily = 'Comfortaa'>Mediterranean Food Court/B Hall</Text>
        
        <br />

        <Text fontSize='sm' fontFamily = 'Nunito'>ALL NIGHT (WHILE SUPPLIES LAST)</Text>

        <Center>

        <UnorderedList>
          <ListItem fontSize='xs' margin = 'auto 4%' textAlign = 'left' fontFamily = 'Comfortaa'>Glow in the dark Cotton Candy by the Glow Room</ListItem>
          <ListItem fontSize='xs' margin = 'auto 4%' textAlign = 'left' fontFamily = 'Comfortaa'>Slushy Machine Spa/Arcade/Hawaiian Crafts</ListItem>
          <ListItem fontSize='xs' margin = 'auto 4%' textAlign = 'left' fontFamily = 'Comfortaa'>Beverages: water, Coca Cola products, lemonade, Gatorade, bottled iced tea and sparkling waters</ListItem>
          <ListItem fontSize='xs' margin = 'auto 4%' textAlign = 'left' fontFamily = 'Comfortaa'>Popcorn Carts</ListItem>
        </UnorderedList>

        </Center>

        
        <Text fontSize='sm' fontFamily = 'Comfortaa'>2 locations:</Text>
        <Text fontSize='sm' fontFamily = 'Comfortaa'>Movie theatre/ESRV Zone (B Hall)</Text>
        <Text fontSize='sm' fontFamily = 'Comfortaa'>Meltdown near Cabo Main Stage</Text>


        <br />
        <br />
        <br />
        <br />

        <Heading as='h2' size='lg' color = '#0000FF' fontFamily = 'Nunito'>CABO MAIN STAGE</Heading>

        <br />

        <Center>

        <UnorderedList>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>8:00-10:00pm&emsp;&emsp;Senior slideshow</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>9:00pm&emsp;&emsp;First Drawing winner announcement</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>9:45pm&emsp;&emsp;Second Drawing winner announcement</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>10:00pm&emsp;&emsp;DJ Hightop</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>10:30pm&emsp;&emsp;Third Drawing winner announcement</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>11:15pm&emsp;&emsp;Fourth Drawing winner announcement</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Midnight&emsp;&emsp;LAST Drawing winner announcement</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>12:50am&emsp;&emsp;DJ’s Last Song</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>1:00am&emsp;&emsp;ALL GO TO THE MAIN STAGE</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>1:10am&emsp;&emsp;Hypnotist performs! All other activities shut down.</ListItem>
        </UnorderedList>

        </Center>



        <br />

        <Text fontSize='md' fontFamily = 'Nunito'>NASHVILLE SMALL STAGE</Text>

        <Center>

        <UnorderedList>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>8:20pm&emsp;&emsp;Break dancers</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>8:30pm&emsp;&emsp;Line Dancing</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>9:00pm&emsp;&emsp;Karaoke</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>9:40pm&emsp;&emsp;Line Dancing</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>10:05pm&emsp;&emsp;Karaoke</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>10:35pm&emsp;&emsp;Break Dancers</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>10:45pm&emsp;&emsp;Line Dancing</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>11:15pm&emsp;&emsp;Karaoke</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>11:45pm&emsp;&emsp;Line Dancing</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>12:15am&emsp;&emsp;Karaoke</ListItem>
        </UnorderedList>

        </Center>



        <br />

        <Text fontSize='md' fontFamily = 'Nunito'>MOVIES</Text>


        <Center>

        <UnorderedList>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>8:15pm&emsp;&emsp;&emsp;&ensp;&nbsp;Movie #1 begins</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>10:20pm&emsp;&emsp;&emsp;Movie #2 begins</ListItem>
        <ListItem fontSize='sm' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Midnight&emsp;&emsp;Movie #3 begins</ListItem>
        </UnorderedList>

        </Center>



        <br />

        <Text fontSize='md' fontFamily = 'Nunito'>CASINO</Text>
        <Text fontSize='sm' margin = 'auto 6%' fontFamily = 'Nunito'>Remember to sign up early for tournaments! Spots go fast!</Text>


        <Center>

        <UnorderedList>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>8:00pm&emsp;&ensp;Casino Poker Tournament Sign ups OPEN</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>9:00pm&emsp;&ensp;Casino Texas Hold’Em Poker Tournament #1 Begins</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>10:00pm&emsp;&ensp;Casino Texas Hold’Em Poker Tournament #2 Begins</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>11:00pm&emsp;&ensp;Casino Texas Hold’Em Poker Tournament #3 Begins</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>12:00pm&emsp;&ensp;Casino Texas Hold’Em Championship Tournament</ListItem>
        </UnorderedList>

        </Center>

        <br />

        <Text fontSize='sm' fontFamily = 'Nunito'>DON’T MISS:</Text>

        
        <Text fontSize='sm' margin = 'auto 4%' fontFamily = 'Comfortaa'>
          Strolling illusionist, tattoo and henna artists, 
        glow-in-the-dark cotton candy, the die table zone, the hypnotist, and so much more....
        </Text>


        <br />
        <br />
        <br />
        <br />

        <Heading as='h2' size='lg' color = '#0000FF' fontFamily = 'Nunito'>ACTIVITIES</Heading>

        <br />
        <br />

        <Heading as='h2' size='md' color = '#0000FF' fontFamily = 'Nunito'>ALL NIGHT LONG</Heading>

        <br />

        <Center>

        <UnorderedList>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Crafts in Hawaiian area</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Greek Games and Arcade</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>FOOD – plenty of it throughout the Quad</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Sports Zone VIP Lounge</ListItem>
        </UnorderedList>

        </Center>

        <br />
        <br />

        <Heading as='h2' size='md' color = '#0000FF' fontFamily = 'Nunito'>GET THEM BEFORE THEY FILL UP!</Heading>

        <br />



        <Text fontSize='sm' fontFamily = 'Comfortaa'>GO TO SPA TO SIGN UP! APPOINTMENTS GO FAST!</Text>

        <Center>

        <UnorderedList>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Massage</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Henna Tattoos</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Fortune Teller</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Tarot Card Reader</ListItem>
        <ListItem fontSize='xs' margin = 'auto 0%' textAlign = 'left' fontFamily = 'Comfortaa'>Airbrush Tattoos</ListItem>
        </UnorderedList>

        </Center>

        <br />
        <br />

        <Heading as='h2' size='md' color = '#0000FF' fontFamily = 'Nunito'>DRAWING TICKETS</Heading>

        <br />

        <Text fontSize='sm' margin = 'auto 14%' fontFamily = 'Nunito'>&emsp;&emsp;8:00pm-8:55pm</Text>
        <Text fontSize='sm' margin = 'auto 14%' fontFamily = 'Comfortaa'>
        Be sure to drop off your drawing tickets in the boxes located in front of D Hall. 
        There will be drawings every 45 min from 9:00pm-12:00am announced on the Main Stage. 
        Winners will collect their prizes at Check Out.
        </Text>
        








      </div>

      <br />

    </div>
  )
};

export default activities;