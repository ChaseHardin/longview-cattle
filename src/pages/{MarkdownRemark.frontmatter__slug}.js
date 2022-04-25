import React from "react"
import { graphql } from "gatsby"
import { NavigationBar } from "../components/navigation/navbar-component"
import { CattleForSale } from "../components/cattle-sale-component"
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react"

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A955C',
    },
    secondary: {
      main: '#222222',
    },
  },
});

export default function Template({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const parsedPathname = location.pathname.replaceAll("/", "");
  
  if (parsedPathname === 'longview-cattlesale' || parsedPathname === 'sale') {
    return (
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <CattleForSale />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <div className="template-buffer">
        <div className="blog-post">
          <h1>{frontmatter.name}</h1>
          <h2>{frontmatter.type}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        name
        type
      }
    }
  }
`
