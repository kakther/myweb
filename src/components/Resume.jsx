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
                        <div className="header">
                            <h2>Kausar Akther</h2>
                            <h5>SOFTWARE TEST ENGINEER/TEST ANALYST/MANUAL/AUTOMATION TESTER</h5>
                            <h4>AKTHERKAUR@GMAIL.COM</h4>
                        </div>
                        
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
                                jobDescription = 
                                "Reviewed various project artifacts for Environmental Information and Public Access System (EIPAS) for various departments – DEP (Department of Environment), MDAR, DCR"
                              
                                
                            />
                            <Experience 
                                  startYear ={2013}
                                  endYear = {2015}
                                  jobName = "QA Engineer"
                                  jobDescription= 
                                    "Extensively used HP Quality Center (QC)/ALM to write Test Cases and Design Steps in Test Plan module and logging defects in Defects module for My Horizon HSA, HRA, FSA and My Health Manager"
    />
                              
                            <Experience
                                startYear ={2015}
                                endYear = {2017}
                                jobName = "QA"
                                jobDescription= 
                                "Used HP Quality Center (QC)/ALM intensively for Requirements management, planning, scheduling, running tests, tracking and managing defects"
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