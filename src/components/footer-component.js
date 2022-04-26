import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import EmailIcon from "@mui/icons-material/Email"
import PersonIcon from "@mui/icons-material/Person"
import PhoneIcon from "@mui/icons-material/PhoneIphone"
import { Typography } from "@mui/material"
import { Link } from "gatsby"

import "../styles/footer.css"

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <Typography fontSize={"1.5rem"} padding={'.2rem'}>Longview Cattle</Typography>
        <div className="icon-text-pair">
          <PersonIcon fontSize="medium" />
          <Typography>Don Hardin</Typography>
        </div>
        <div className="icon-text-pair">
          <PhoneIcon fontSize="medium" />
          <Typography>515-313-8982</Typography>
        </div>
        <Link to={"https://www.facebook.com/longviewcattle"}>
          <FacebookIcon className="footer-icon" fontSize="large" />
        </Link>
        <a href="mailto: donhardin62@gmail.com">
          <EmailIcon fontSize="large" className="footer-icon" />
        </a>
      </div>
    </footer>
  )
}
