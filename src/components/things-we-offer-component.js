import React from "react"
import VerifiedIcon from "@mui/icons-material/Verified"

import "../styles/things-we-offer.css"

export const ThingsWeOffer = () => {
  return (
    <section className="things-we-offer-container">
      <StyledVerification text={"Beef"} />
      <StyledVerification text={"Sires"} />
      <StyledVerification text={"Donors"} />
    </section>
  )
}

const StyledVerification = props => {
  return (
    <div className='verification-icon'>
        <VerifiedIcon className="verified-icon-style"/>
        <div className='verified-icon'>{props.text}</div>
    </div>
  )
}
