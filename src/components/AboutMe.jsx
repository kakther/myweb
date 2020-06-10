import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
    render(){
        return(
            <Grid>
                <Cell className="aboutme" col={12}>
                    <h2>About Me</h2>
                    <p>I am a software test engineer located in New York City with experience tester. 
                    I am a graduate of Brooklyn University where I majored in Biology. Currently, I am working as a software test engineer at Gcom Soft.
                    I am experienced in a variety of programming languages and tools. I love learning new things and solving 
                    complex problems. One day, I hope to use my skills to help people in need and make an impact in the world.
                     When I’m not working, I like to read, play with my younger sister, go out, and try out new food.</p>
                </Cell>
            </Grid>
        )
    }
}

export default About;