import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button, Menu, MenuButton, MenuList, MenuItem, Center, Text } from "@chakra-ui/react";
import gradNightLogo from './gradNightLogo.png';
import { HamburgerIcon } from '@chakra-ui/icons';
import './header.css';

const Header = (props) => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#00CC29"
      color="white"
      {...props}
    >    

      <Flex align="center" mr={5}>

        <Link to="/">
          <img
            className = 'logo'
            borderRadius = '50%'
            position = 'relative'
            width = '125px'
            margin = '-250px 0px'
            src = {gradNightLogo}
            alt = "site logo"
          />
        </Link>

        <Link to="/">
          <h1
          className='titleText'>
            SRV Senior Grad Night 2021
          </h1>
        </Link>
      </Flex>

      <Menu>
        <MenuButton
        as={Button}
        variant='outline'
        display={{ base: "block", lg: "none" }}>
          <HamburgerIcon />
        </MenuButton>
        <MenuList bgColor = '#00DE2C'>

          <Center>
            <Link to="/">
            
              <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00DE2C'}}>Home</MenuItem>
            
            </Link>
          </Center>

          <Center>
            <Link to="/map">
            
              <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00DE2C'}}>Map</MenuItem>
            
            </Link>
          </Center>
          <Center>
            <Link to="/activities">
            
              <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00DE2C'}}>Activities</MenuItem>
            
            </Link>
          </Center>
          <Center>
            
            <Menu>
              <MenuButton _hover={{color: "#DCDCDC", bgColor: '#00DE2C'}}>

                <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00DE2C'}}>
                  <Text>Important Info</Text>
                </MenuItem>

                </MenuButton>
                
                <MenuList color = '#FFFFFF' bgColor = '#00DE2C'>

                  <Center>
                    <Link to="/aid">
                    
                      <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00DE2C'}}>First Aid</MenuItem>
                    
                    </Link>
                  </Center>

                  <Center>
                    <Link to="/security">
                    
                      <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00DE2C'}}>Security</MenuItem>
                    
                    </Link>
                  </Center>

                  <Center>
                    <Link to="/prizes">
                    
                      <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00DE2C'}}>Prizes</MenuItem>
                    
                    </Link>
                  </Center>

                  <Center>
                    <Link to="/casino">
                    
                      <MenuItem _hover={{color: "#DCDCDC", bgColor: '#00DE2C'}}>Casino</MenuItem>
                    
                    </Link>
                  </Center>

                </MenuList>

              

              </Menu>
            
            
          </Center>

        </MenuList>
      </Menu>



      <Box
        className = 'navButtons'
        width={{ sm: "full", md: "auto" }}
        alignItems="center">

        <Link to="/">
          <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Home</Button>
        </Link>
        <Link to="/map">
          <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Map</Button>
        </Link>
        <Link to="/activities">
          <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Activities</Button>
        </Link>

        <Menu>
              <MenuButton _hover={{color: "#DCDCDC", bgColor: '#00DE2C'}}>

                <Button variant="ghost" _hover={{color: "#DCDCDC"}}>
                  Important Info
                </Button>

              </MenuButton>
                
                <MenuList color = '#FFFFFF' bgColor = '#00DE2C'>

                  <Center>
                    <Link to="/aid">
                    
                      <Button variant="ghost" _hover={{color: "#DCDCDC"}}>First Aid</Button>
                    
                    </Link>
                  </Center>
                  <Center>
                    <Link to="/security">
                    
                      <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Security</Button>
                    
                    </Link>
                  </Center>
                  <Center>
                    <Link to="/prizes">
                    
                      <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Prizes</Button>
                    
                    </Link>
                  </Center>
                  <Center>
                    <Link to="/casino">
                    
                      <Button variant="ghost" _hover={{color: "#DCDCDC"}}>Casino</Button>
                    
                    </Link>
                  </Center>

                </MenuList>


              </Menu>

      
      </Box>
    </Flex>
  );
};

export default Header;
