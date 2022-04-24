import React from "react"
import { CattleForSale } from "../components/cattle-sale-component"
import { NavigationBar } from "../components/navbar-component"
import '../styles/main.css';

export default function Home() {
  return (
    <>
      <NavigationBar/>
      <CattleForSale/>
    </>
  )
}
