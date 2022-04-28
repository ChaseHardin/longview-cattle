import React from "react"
import { Button, Grid, Typography } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import { TextField } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import { Box, Avatar } from "@mui/material"
import profilePicture from "../images/profile-pic.jpg"

import "../styles/contact.css"

export const Contact = () => {
  return (
    <Grid container display={"flex"}>
      <Grid xs={12} sm={6} md={4}>
        <div className='profile-pic-container'>
          <Avatar
            alt="Profile Picture"
            src={profilePicture}
            sx={{ width: '300px', height: '300px' }}
          />
          <div className="sub-text-container">
            <div className='text'>Don Hardin</div>
            <div className='text'>515-313-8982</div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <form
          name="Contact Form"
          method="POST"
          data-netlify="true"
          style={{ marginTop: "3rem" }}
        >
          <input type="hidden" name="form-name" value="Contact Form" />

          <Box sx={{ display: "flex", alignItems: "center", padding: "1rem" }}>
            <Typography fontSize={"1.6rem"}>
              Get in touch with any questions!
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", padding: "1rem" }}>
            <div style={{ marginRight: "10px" }}>
              <AccountCircle
                sx={{ color: "action.active" }}
                fontSize={"large"}
              />
            </div>
            <TextField
              required
              fullWidth
              label="Full Name"
              color="primary"
              name="name"
              size="small"
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", padding: "1rem" }}>
            <div style={{ marginRight: "10px" }}>
              <EmailIcon sx={{ color: "action.active" }} fontSize={"large"} />
            </div>
            <TextField
              required
              fullWidth
              label="Email"
              color="primary"
              type="email"
              name="email"
              size="small"
            />
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "flex-end", padding: "1rem" }}
          >
            <TextField
              required
              fullWidth
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={12}
              name="message"
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", padding: "1rem" }}
          >
            <Button type={"submit"} size={"large"} variant={"contained"}>
              Send Email
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  )
}
