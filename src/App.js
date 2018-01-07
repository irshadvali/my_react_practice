import React, { Component } from 'react';
//import HelloWorld from "./components/HelloWorld"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HelloWorldContainer from "./containers/HelloWorldContainer"
import SecondScreen from "./components/SecondScreen"
import ThirdScreen from "./components/ThirdScreen"
class App extends Component {
  render() {
    
    return (
      <div >
      <Router>
        
          <Switch>
          <Route exact path='/' component={HelloWorldContainer} />
          <Route exact path='/SecondScreen/:filter' component={SecondScreen} />
          <Route exact path='/ThirdScreen/:filter' component={ThirdScreen} />
          </Switch>
      



      </Router>
        </div>

    );
  }
}

export default App;
