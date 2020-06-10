import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile_pic from './assets/profile.jpg';


class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                    src={profile_pic} 
                    alt="Logo"
                    className="avatar-img"
                    style={{height: '160px', width: "160px"}}
                    /> 

                    <div className="banner-text"> 
                       <h2>Web dev/Testing</h2> 

                       <hr/>

                       <p>HTML/CSS | Bootstrap | React | SQL <br />
                          HP QTP/UFT | HP QC/ALM | Jira | Zephyr | Jaws | TFS | SQL
                       </p>

                       <div className="soical-links">

                           {/* LinkedIN*/}
                           <a href="https://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank">
                               <i className="fa fa-linkedin" aria-hidden="true" />
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