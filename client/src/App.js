import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import NoMatch from './Components/NoMatch/NoMatch';
import NagForm from './Components/NagForm/NagForm';
// import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
// import { initReactDevise, authRoutes, PrivateRoute} from 'react-devise';
// import store from './store';



class App extends Component {

  
  
  render() {
    
    // const getConfig = initReactDevise();

    return (
      
      
      
      
      // <Provider store={store}> 
      <Container fluid>
      <Navbar />
      {/* <Router history={createBrowserHistory()}> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home/' component={Home} />
        {/* {authRoutes()} */}
        <Route exact path='/about/' component={About} />
        <Route exact path='/contactus/' component={ContactUs} />
        <Route exact path='/newnag/' component={NagForm} />
        <Route component={NoMatch} />
      </Switch>
      {/* </Router> */}
      </Container>
      // </Provider>
    );
  }
}

export default App;
