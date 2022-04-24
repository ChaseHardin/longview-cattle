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
        <div className='menu-action'>
          <CloseIcon
            fontSize="large"
            onClick={handleOnClick}
          />
        </div>
        <div className="link-options">
          {links.map(link => (
            <Link to={link.to} className={"link"}>
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
        <MenuIcon
          fontSize="large"
          className="menu-action"
          onClick={handleOnClick}
        />
      </div>
      {isOpen && renderMenuOptions()}
    </>
  )
}
