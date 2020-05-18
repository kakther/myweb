import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile_pic from './assets/profile.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={profile_pic} alt="Logo"
                           style={{height: '200px'}}/>
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Kausar Akther</h2>
                        <h3 style={{color: 'gray'}}>Programmer</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>
                        A path is either relative or absolute. An absolute path always contains the root 
                        element and the complete directory list required to locate the file. ... A relative 
                        path needs to be combined with another path in order to access a file. For example, joe/foo is a relative path.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>State:</h5>
                        <p>New York</p>
                        <h5>Phone:</h5>
                        <p>(347) 221-556</p>
                        <h5>Email:</h5>
                        <p>kauakther@gmail.com</p>
                        <h5>Web:</h5>
                        <p>kausarwebsite.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear ={2012}
                            endYear = {2015}
                            schoolName="Brooklyn College"
                            schoolDescription="Brooklyn College, part of the City University of New York, 
                            is a public college in Brooklyn, New York, with about 15,000 undergraduate and 2,800 graduate students on a 35-acre campus.
                             New York City's first public coeducational liberal arts college, it has been nicknamed, more recently"
                            />
                            <hr style={{borderTop: '3px solid #e22947'}} />

                            <h2>Experience</h2>
                            <Experience 
                                startYear ={2011}
                                endYear = {2013}
                                jobName = "Quality Test Analyst"
                                jobDescription= "A path is either relative or absolute. An absolute path always contains the root element and the complete directory list required to locate the file. ... A relative path needs to be combined with another path in order to access a file. For example, joe/foo is a relative path."
                            />
                            <Experience 
                                  startYear ={2013}
                                  endYear = {2015}
                                  jobName = "QA Engineer"
                                  jobDescription= "A path is either relative or absolute. An absolute path always contains the root element and the complete directory list required to locate the file. A relative path needs to be combined with another path in order to access a file. For example, joe/foo is a relative path."
                            />
                              
                            <Experience
                                startYear ={2015}
                                endYear = {2017}
                                jobName = "QA"
                                jobDescription= "A path is either relative or absolute. An absolute path always contains the root element and the complete directory list required to locate the file. ... A relative path needs to be combined with another path in order to access a file. For example, joe/foo is a relative path."
                            />
                            <hr style={{borderTop: '3px solid #e22947'}} />

                            <h2>Skills</h2>
                            <Skills 
                                skill="javascript"
                                Progress={100}
                            />

                            <Skills 
                                skill="HP QC/ALM"
                                Progress={100}
                            />    

                            <Skills 
                                skill="HP QTP/UFT"
                                Progress={100}
                            />

                            <Skills 
                                skill="SQL"
                                Progress={100}
                            />

                            <Skills 
                                skill="JIRA/Agile"
                                Progress={100}
                            />

                            <Skills 
                                skill="Use Case"
                                Progress={100}
                            />

                            <Skills 
                                skill="Test Scripts"
                                Progress={100}
                            />

                            <Skills 
                                skill="Smoke Testing"
                                Progress={100}
                            />

                            <Skills 
                                skill="Automated Testing"
                                Progress={100}
                            />  


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;