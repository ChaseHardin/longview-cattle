import React from "react"
import { NavigationBar } from "../components/navigation/navbar-component";
import { ThingsWeOffer } from "../components/things-we-offer-component";

import '../styles/main.css';

export default function Home() {
  return (
    <>
      <NavigationBar/>
      <ThingsWeOffer/>
    </>
  )
}
