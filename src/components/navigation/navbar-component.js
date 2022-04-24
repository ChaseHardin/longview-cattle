import React from "react"

import { MobileNavigation } from "./mobile-navigation-component"
import { DesktopNavigation } from "./desktop-navigation-component"

export const NavigationBar = () => {
  const links = [
    {
      to: "/longview-cattle/",
      title: "Home",
    },
    {
      to: "/longview-cattle/bulls",
      title: "Bulls",
    },
    {
      to: "/longview-cattle/cows",
      title: "Cows",
    },
    {
      to: "/longview-cattle/about",
      title: "About",
    },
    {
      to: "/longview-cattle/contact",
      title: "Contact",
    }
  ]

  return (
    <>
      <DesktopNavigation links={links} />
      <MobileNavigation links={links} />
    </>
  )
}
