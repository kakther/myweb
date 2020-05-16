import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, IconButton, Button } from 'react-mdl';


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

  toggleCategories() {
    if(this.state.activeTab  === 0){
        return(
            // {/* Project #1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background:
                 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQEkB4gODANjdhxk2MPEt7-6FU_uJECVtm9ZAxM7azz-ZiCfgA&usqp=CAU) center / cover' }}>React Project #1</CardTitle>
                 <CardText>
                 Calls are used for describing the functions that you're going to write. In this case, the test is saying, "Okay, I think there's going to be a function called shout, and it should take one argument (it doesn't actually matter what the argument is called, but string, is nice and specific, don't you think?). It should return that argument in all caps.
                 </CardText>
                 <CardActions border> 
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" /> 
                 </CardMenu>
            </Card>
            )
    }else if (this.state.activeTab === 1){
        return (
            // {/* Project #2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color:'#fff', height: '176px', background:
             'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQEkB4gODANjdhxk2MPEt7-6FU_uJECVtm9ZAxM7azz-ZiCfgA&usqp=CAU) center / cover' }}>React Project #2</CardTitle>
             <CardText>
             Calls are used for describing the functions that you're going to write. In this case, the test is saying, "Okay, I think there's going to be a function called shout, and it should take one argument (it doesn't actually matter what the argument is called, but string, is nice and specific, don't you think?). It should return that argument in all caps.
             </CardText>
             <CardActions border> 
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" /> 
             </CardMenu>
        </Card>
        )
    }else if(this.state.activeTab === 2){
        return (
            // {/* Project #3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color:'#fff', height: '176px', background:
             'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQEkB4gODANjdhxk2MPEt7-6FU_uJECVtm9ZAxM7azz-ZiCfgA&usqp=CAU) center / cover' }}>React Project #3</CardTitle>
             <CardText>
             Calls are used for describing the functions that you're going to write. In this case, the test is saying, "Okay, I think there's going to be a function called shout, and it should take one argument (it doesn't actually matter what the argument is called, but string, is nice and specific, don't you think?). It should return that argument in all caps.
             </CardText>
             <CardActions border> 
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" /> 
             </CardMenu>
        </Card>
        )
    }
  }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Ruby</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div> 
        )
    }
}

export default Projects;