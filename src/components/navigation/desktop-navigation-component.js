import React from "react"
import { Link } from "gatsby"
import { Logo } from "../logo-component"

import "../../styles/navigation.css"

export const DesktopNavigation = ({ links }) => {
  return (
    <div className="navigation-bar">
      <Logo />
      <div className="navigation-links">
        {links.map(link => <Link to={link.to} key={link.title}>{link.title}</Link>)}
      </div>
    </div>
  )
}
