import React from "react"
import VerifiedIcon from "@mui/icons-material/Verified"
import { Grid, Typography } from "@mui/material"

import "../styles/things-we-offer.css"

export const ThingsWeOffer = () => {
  return (
    <section className="buffer">
      <Typography 
      fontSize={'2.5rem'}
      textAlign={'center'}
      color={'#222222'}
      >Everything We Offer</Typography>
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
      <Typography fontSize={'2.5rem'} color='#222222'>
        {props.text}
      </Typography>
    </Grid>
  )
}
