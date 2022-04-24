import React from "react"

import { MobileNavigation } from "./mobile-navigation-component"
import { DesktopNavigation } from "./desktop-navigation-component"

export const NavigationBar = () => {
  const links = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/bulls",
      title: "Bulls",
    },
    {
      to: "/cows",
      title: "Cows",
    },
    {
      to: "/sale",
      title: "Sale",
    },
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/contact",
      title: "Contact",
    },
  ]

  return (
    <>
      <DesktopNavigation links={links} />
      <MobileNavigation links={links} />
    </>
  )
}
