import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Contact extends Component {
    render(){
        return(
           <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                       <h2>Kausar Akther</h2>
                        <img 
                           src="/Users/kausarakther/Pre_Class_Work/myweb/src/components/assets/profile.jpg" 
                           alt="profile"
                           style={{height: '250px'}}
                        />
                   </Cell>

                   <Cell col={6}>half page</Cell>
                </Grid>
           </div> 
        )
    }
}

export default Contact;