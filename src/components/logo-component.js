import React from "react"
import Typography from "@mui/material/Typography"

import "../styles/logo.css"

export const Logo = () => {
  return (
    <div className="logo">
      <Typography fontSize={'2rem'} justifyContent='middle' fontWeight={'bold'}>
        Longview
      </Typography>
      <Typography fontSize='1.25rem'>
        CATTLE
      </Typography>
    </div>
  )
}
