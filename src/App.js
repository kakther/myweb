import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

// Components 
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';



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
                { <Route path='/Resume' component={Resume} /> }
                { <Route path='/Contact' component={Contact} /> }
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