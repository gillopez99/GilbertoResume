//import { getDefaultNormalizer } from "@testing-library/react";
import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class landingPage extends Component {
  render() {
    return(
        <div style={{width: '100%', margin:'auto'}}>
            <Grid className="landing-grid">
              <Cell col={12}>
                <img 
                  src="https://media.licdn.com/dms/image/C4E03AQGEus_CwHxaYQ/profile-displayphoto-shrink_800_800/0/1631659211481?e=1692230400&v=beta&t=7USd2omtQ2gHpSgF8LyoI0WEurWI60AdCRJ0V2izjAY"
                  alt="avatar"
                  className="avatar-img"
                  />
                <div className="banner-text">
                    <h1>Web Developer (Front-end)</h1>
                <hr/>
               <p>HTML/CSS | Bootstrap | Javascript | JQuery | React</p>
            <div className="social-links">
                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/gilberto-l%C3%B3pez-823831218/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github" aria-hidden="true" />
                </a>          
            </div>    
                </div>  
              </Cell>
            </Grid>
        </div>
    )
  }
}

 export default landingPage;