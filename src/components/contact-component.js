import React from "react"
import { Grid } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import EmailIcon from "@mui/icons-material/Email"

import "../styles/contact.css"

export const Contact = () => {
  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <form name="Contact Form" method="POST" data-netlify="true" style={{marginTop: '6rem'}}>
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
  )
  // return (
  //   <Grid container marginTop={"2rem"} display={"flex"}>
  //     <Grid xs={12} sm={4}>
  //       <div className="contact-container">
  //         <div className="icon-container">
  //           <LocationOnIcon className="lg-icon" />
  //           <div className="lg-font">Address</div>
  //         </div>
  //         <div className="text">
  //           <div>3220 Wyoming Street</div>
  //           <div>New Virginia, IA 50210</div>
  //         </div>
  //       </div>
  //     </Grid>
  //     <Grid xs={12} sm={4}>
  //       <div className="contact-container">
  //         <div className="icon-container">
  //           <PhoneIphoneIcon className="lg-icon" />
  //           <div className="lg-font">Phone</div>
  //         </div>
  //         <div className="text">
  //           <div>Don Hardin</div>
  //           <div>515-313-8982</div>
  //         </div>
  //       </div>
  //     </Grid>
  //     <Grid xs={12} sm={4}>
  //       <div className="contact-container">
  //         <div className="icon-container">
  //           <EmailIcon className="lg-icon" />
  //           <div className="lg-font">Email</div>
  //         </div>
  //         <div className="text">
  //           <div>donhardin@gmail.com</div>
  //         </div>
  //       </div>
  //     </Grid>
  //   </Grid>
  // )
}
