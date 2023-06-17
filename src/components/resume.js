import { getDefaultNormalizer } from "@testing-library/react";
import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return(
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img 
                            src="https://media.licdn.com/dms/image/C4E03AQGEus_CwHxaYQ/profile-displayphoto-shrink_800_800/0/1631659211481?e=1692230400&v=beta&t=7USd2omtQ2gHpSgF8LyoI0WEurWI60AdCRJ0V2izjAY"
                            alt="avatar"
                            style={{height: '200px'}}
                        />
                    </div>

                    <h2 style={{paddingTop: '2em'}}>Gilberto Lopez</h2>
                    <h4 style={{color: 'grey'}}>Web Developer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    <p>Enthusiastic and passionate web developer with 2 years of professional experience evaluating, designing, and maintaining web applications. Proficient in Javascript, HTML, and CSS</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    <h5>Phone</h5>
                    <p>(998) 152-2638</p>
                    <h5>Email</h5>
                    <p>gil.lopez1231@gmail.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>


                    <Education
                      startYear={2017}
                      endYear={2022}
                      schoolName="CETYS UNIVERSIDAD (MEXICALI, B.C.)"
                      schoolDescription="
                      -MEMBER OF RECICALI
                      -ORGANIZING MEMBER OF COMPUTER SCIENCE ENGINEERING DAY (2018) "
                     />

                        <Education
                        startYear={2021}
                        endYear={2021}
                        schoolName="CZECH TECHNICAL UNIVERSITY (PRAGUE, CZECH REPUBLIC)"
                        schoolDescription="Semester abroad"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}  />

                        <h2>Experience</h2>
                            
                        <Experience
                            startYear={2021}
                            endYear={2022}
                            jobName="JOFFROY GLOBAL"
                            jobDescription="Technology Intern (infraestructure), participated in network and infrastructure projects for customs company. In addition to providing tech support for users (VMWARE, office 365)."
                        />

                        <Experience
                            startYear={2022}
                            endYear={"Present"}
                            jobName="GULFSTREAM AEROSPACE"
                            jobDescription="
                            Currently the main developer in a  engineering document control project named Dochangar.
                            Successfully identified, diagnosed, and fixed website problems.
                            Helped to achieve a consistent look and visual theme.
                            Evaluated and became knowledgeable in new standards and technologies in web development. 
                            Mainly worked with JS, CSS, and HTML.
                            Project utilizes SCRUM methodology"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}  />
                        <h2>Skills</h2>
                        <Skills
                            skill="Javascript"
                            progress={100}
                        />
                            <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                            <Skills
                            skill="Jquery"
                            progress={75}
                        />
                           <Skills
                            skill="React"
                            progress={25}
                        />
                </Cell>
            </Grid>
        </div>
    )
  }
}

 export default Resume;