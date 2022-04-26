import React from "react"
import { Grid, Typography } from "@mui/material"

import "../styles/contact.css"

export const Contact = () => {
  return (
    <Grid container marginTop={'6rem'}>
      <Grid item xs={12} md={6} display={"flex"}>
        <Typography fontSize={"2rem"} fontWeight={"bold"}>
          <div>Get in touch with</div>
          <div>any questions!</div>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
        <div style={{width: '100%', height: '100%'}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.8980051132794!2d-93.59465058399027!3d41.15857687928591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e95211ea5a9111%3A0x11cf744dc46ba0c2!2s3220%20Wyoming%20St%2C%20New%20Virginia%2C%20IA%2050210!5e0!3m2!1sen!2sus!4v1650943104792!5m2!1sen!2sus"
            width={"100%"}
            height="500px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Grid>
    </Grid>
  )
}
