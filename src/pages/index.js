import React from "react"
import { ThingsWeOffer } from "../components/things-we-offer-component"
import { AppRenderer } from "../components/app-renderer-component"

export default function Home() {
  return (
    <AppRenderer>
      <div id="banner-image"></div>
      <ThingsWeOffer />
    </AppRenderer>
  )
}
