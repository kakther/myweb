import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import profile from './assets/profile.jpg';


class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                     <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB9myvTNSxiM4gLttLfDAVvSjxJl7o9HtvyiOZ92GC2bzUOYBF&usqp=CAU" 
                    alt="avatar"
                    className="avatar-img"
                    
                    /> 
                    <div className="banner-text">
                        <h1>Full Stack Web Developer/ <br/>
                        Software Test Engineer
                        </h1>
                        <hr />
                        <p>Programming Languages: HTML/CSS | JavaScript | React | Bootstrap | SQL <br /> 
                       Software Testing Tools: HP QTP/UFT | HP QC/ALM | Jira | Zephyr | Jaws | Rational Performance Tester | TFS</p>

                       <div className="social-links">
                           {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-linkedin"></i>
                            </a>

                            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                        </div>
                    </div>
                </Grid>
            </div>
     )
   }
}

export default Landing;