import React from "react"
import { Link } from "gatsby"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

import "../../styles/mobile-navigation.css"

export const MobileNavigation = ({ links }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOnClick = () => setIsOpen(!isOpen)

  const renderMenuOptions = () => {
    return (
      <div className="options-container">
        <div className="menu-action" onClick={handleOnClick}>
          <CloseIcon fontSize="large" />
        </div>
        <div className="link-options">
          {links.map(link => (
            <Link
              key={link.title}
              className={"link"}
              to={link.to}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="navigation-bar-mobile">
        <div className="logo-mobile">{"Longview Cattle"}</div>
        <div onClick={handleOnClick}>
          <MenuIcon fontSize="large" className="menu-action" />
        </div>
      </div>
      {isOpen && renderMenuOptions()}
    </>
  )
}
