import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react';


const NoMatch = () => (


  <Segment textAlign='center' padded='very'>
  <Header size='huge' icon><Icon name='settings' /> 
  Whoops, Something Went Wrong!?
  <Header.Subheader>Click here to go back to the magic</Header.Subheader>
  </Header> 
  </Segment>


)

export default NoMatch