import React from "react"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material/styles"
import { NavigationBar } from "./navigation/navbar-component"
import { Footer } from "./footer-component"

import "../styles/main.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#4A955C",
    },
    secondary: {
      main: "#222222",
    },
  },
})

export const AppRenderer = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <NavigationBar />
        <div className="content-container">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
