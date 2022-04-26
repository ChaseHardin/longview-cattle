import React from "react"
import { Grid } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';

import "../styles/contact.css"

export const Contact = () => {
  return (
    <Grid container marginTop={"2rem"} display={"flex"}>
      <Grid xs={12} sm={4}>
        <div className="contact-container">
          <div className="icon-container">
            <LocationOnIcon className="lg-icon" />
            <div className="lg-font">Address</div>
          </div>
          <div className="text">
            <div>3220 Wyoming Street</div>
            <div>New Virginia, IA 50210</div>
          </div>
        </div>
      </Grid>
      <Grid xs={12} sm={4}>
        <div className="contact-container">
          <div className="icon-container">
            <PhoneIphoneIcon className="lg-icon" />
            <div className="lg-font">Phone</div>
          </div>
          <div className="text">
            <div>Don Hardin</div>
            <div>515-313-8982</div>
          </div>
        </div>
      </Grid>
      <Grid xs={12} sm={4}>
        <div className="contact-container">
          <div className="icon-container">
            <EmailIcon className="lg-icon" />
            <div className="lg-font">Email</div>
          </div>
          <div className="text">
            <div>donhardin@gmail.com</div>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
