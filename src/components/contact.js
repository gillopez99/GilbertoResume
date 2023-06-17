import { getDefaultNormalizer } from "@testing-library/react";
import React, { Component } from "react";
import { Cell, Grid, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return(
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Gilberto Lopez</h2>
              <img 
                src="https://media.licdn.com/dms/image/C4E03AQGEus_CwHxaYQ/profile-displayphoto-shrink_800_800/0/1631659211481?e=1692230400&v=beta&t=7USd2omtQ2gHpSgF8LyoI0WEurWI60AdCRJ0V2izjAY"
                alt="avatar"
                style={{height: '250px'}}
                />
                <p style={{width: '75%', margin:'auto', paddingTop: '1em'}}>Contact me here.</p>
            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>
              <div className="contact-list">
              <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      +52(686)194-2638
                      </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      gil.lopez1231@gmail.com
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