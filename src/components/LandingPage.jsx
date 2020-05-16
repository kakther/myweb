import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import profile from './assets/profile.jpg';


class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                     <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB9myvTNSxiM4gLttLfDAVvSjxJl7o9HtvyiOZ92GC2bzUOYBF&usqp=CAU" 
                    alt="avatar"
                    className="avatar-img"
                    /> 

                    <div className="banner-text"> 
                       <h2>Test Engineer/Full Stack Web Developer</h2> 

                       <hr/>

                       <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | SQL <br />
                          HP QTP/UFT | HP QC/ALM | Jira | Zephyr | Jaws | TFS | SQL
                       </p>

                       <div className="soical-links">

                           {/* LinkedIN*/}
                           <a href="hhttps://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank">
                               <i className="fa fa-linkedin" aria-hidden="true" />
                           </a>

                             {/* Github*/}
                           <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
                               <i className="fa fa-github" aria-hidden="true" />
                           </a>
                       </div>
                       
                    </div>
                    </Cell>
                </Grid>
            </div>
     )
   }
}

export default Landing;