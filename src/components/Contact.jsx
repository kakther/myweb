import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import profile_pic from './assets/profile.jpg';

class Contact extends Component {
    render(){
        return(
           <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                       <h2>Kausar Akther</h2>
                        <img src={profile_pic} alt="Logo"
                           style={{height: '260px'}}/>
                        <p style={{width:'75%', margin:'auto', paddingTop: 'iem'}}>Manual Testing, UAT & Automation Testing experienced QA/Software Tester with expertise of software 
                        testing tools, techniques, SDLC and various development methodologies. I am now available for a challenging and rewarding position in the testing industry 
                        to add value to projects as a Manual/Automation/QA/UAT Tester/Analyst.</p>
                   </Cell>

                   <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '23px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone" aria-hidden="true" />
                                        (347) 221-5596   
                                    </ListItemContent>
                                  </ListItem>
                                  <ListItem>
                                    <ListItemContent style={{fontSize: '23px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true" />
                                        kakther
                                    </ListItemContent>
                                  </ListItem>
                                  <ListItem>
                                    <ListItemContent style={{fontSize: '23px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    kauakther@gmail.com  
                                    </ListItemContent>
                                  </ListItem>
                                    
                            </List>

                        </div>
                       
                   </Cell>
                </Grid>
           </div> 
        )
    }
}

export default Contact;