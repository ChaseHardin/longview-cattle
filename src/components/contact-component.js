import React from "react"
import { Button, Grid } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import { TextField } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import { Box } from "@mui/material"

import "../styles/contact.css"

// const handleSubmit = event => {
//   event.preventDefault()
// }

export const Contact = () => {
  return (
    <Grid container display={"flex"}>
      <Grid xs={12} sm={4}>
        <div className="contact-container">
          <div className="text">
            <div>Don Hardin</div>
            <div>515-313-8982</div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={8}>
        <form
          name="Contact Form"
          method="POST"
          data-netlify="true"
          style={{ marginTop: "6rem" }}
        >
          <input type="hidden" name="form-name" value="Contact Form" />

          <Box
            sx={{ display: "flex", alignItems: "flex-end", padding: "1rem" }}
          >
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              fullWidth
              id="input-with-sx"
              label="Full name"
              variant="standard"
              name="name"
            />
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "flex-end", padding: "1rem" }}
          >
            <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              required
              fullWidth
              id="input-with-sx"
              label="Email"
              variant="standard"
              color="primary"
              type="email" 
              name="email"
            />
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "flex-end", padding: "1rem" }}
          >
            <TextField
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
            <Button
              type={"submit"}
              size={"large"}
              variant={"contained"}
            >
              Send Email
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  )
}
