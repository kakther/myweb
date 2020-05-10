import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

// Components 
import Nav from './components/Nav';
import Home from './components/Home';



class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <Router>
            <div>
              <Nav />
              <Switch>
                <Route path='/' exact component={Home} />
                {/* <Route path='/resume' component={Resume} /> */}
                {/* <Route path='/contact' component={contact} /> */}
              </Switch>
            </div>
          </Router>
          {/* <Footer /> */}
        </>
      </div>
    )
  }
}   

export default App;