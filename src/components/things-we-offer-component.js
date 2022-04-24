import React from "react"
import VerifiedIcon from "@mui/icons-material/Verified"
import { Grid } from "@mui/material"

import "../styles/things-we-offer.css"

export const ThingsWeOffer = () => {
  return (
    <section className="buffer">
      <h1 className="things-we-offer-header">{"Everything We Offer"}</h1>
      <Grid container className="things-we-offer-container">
        <StyledVerification text={"Beef"} />
        <StyledVerification text={"Sires"} />
        <StyledVerification text={"Donors"} />
      </Grid>
    </section>
  )
}

const StyledVerification = props => {
  return (
    <Grid item xs={12} md={4} className="verification-icon">
      <VerifiedIcon className="verified-icon-style" />
      <div className="verified-icon">{props.text}</div>
    </Grid>
  )
}
