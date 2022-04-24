import React from "react"
import { NavigationBar } from "../components/navbar-component"
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
