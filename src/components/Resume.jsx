import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell className="resume-right-col" col={12}>
                        <h2>Education</h2>
                        <Education 
                            schoolName="Brooklyn College"
                            />
                            <hr style={{borderTop: '3px solid #e22947'}} />

                            <h2>Experience</h2>
                            <Experience 
                                startYear ={2011}
                                endYear = {2013}
                                jobName = "Quality Test Analyst"
                                jobDescription= 
                                "•	Reviewed various project artifacts for Environmental Information and Public Access System (EIPAS) for various departments – DEP (Department of Environment), MDAR, DCR
                                •	Participated in Requirements Review & Grooming Meetings throughout Software Development Life Cycle (SDLC)
                                •	Worked closely with Software Developers, BA and SME to design Manual & Automated Tests for Functional & Regression Testing for DEP, MDAR and DCR projects using HP ALM and HP UFT
                                •	Organized and ran KT sessions with new team members to share AUT knowledge
                                •	Participated in Agile/Scrum software development process by developing test cases for Sprints"
                            />
                            <Experience 
                                  startYear ={2013}
                                  endYear = {2015}
                                  jobName = "QA Engineer"
                                  jobDescription= 
                                  "ute path always contains the root element and the complete directory list required to locate the file. A relative path needs to be combined with another path in order to access a file. For example, joe/foo is a relative path."
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