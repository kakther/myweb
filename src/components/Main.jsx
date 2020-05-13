import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Componants
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';




const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/" component={AboutMe} />
        <Route path="/" component={Contact} />
        <Route path="/" component={Projects} />
        <Route path="/" component={Resume} />

    </Switch>
)


export default Main;