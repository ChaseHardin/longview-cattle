import React from "react"
import VerifiedIcon from "@mui/icons-material/Verified"

import "../styles/things-we-offer.css"

export const ThingsWeOffer = () => {
  return (
    <section>
      <h1 className="things-we-offer-header">{"Everything We Offer"}</h1>
      <div className="things-we-offer-container">
        <StyledVerification text={"Beef"} />
        <StyledVerification text={"Sires"} />
        <StyledVerification text={"Donors"} />
      </div>
    </section>
  )
}

const StyledVerification = props => {
  return (
    <div className="verification-icon">
      <VerifiedIcon className="verified-icon-style" />
      <div className="verified-icon">{props.text}</div>
    </div>
  )
}
