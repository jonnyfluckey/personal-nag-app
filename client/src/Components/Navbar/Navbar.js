import React from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';



const Navbar = () => (

  <>
    <Menu pointing>
    <Menu.Item name='Home'><Icon name="home" />Home</Menu.Item>
    <Menu.Item name='About'><Icon name="user" />About</Menu.Item>
    <Menu.Item name='Contact Us'><Icon name="mail" />Contact Us</Menu.Item>
    <Menu.Menu position="right">
    <Menu.Item name='Log In'><Button>Log In</Button></Menu.Item>
    <Menu.Item name='Sign Up'><Button>Sign Up</Button></Menu.Item>
    </Menu.Menu>
    </Menu>
  </>

) 

export default Navbar