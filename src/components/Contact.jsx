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