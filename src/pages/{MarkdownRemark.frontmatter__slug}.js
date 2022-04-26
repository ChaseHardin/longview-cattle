import React from "react"
import { graphql } from "gatsby"
import { CattleForSale } from "../components/cattle-sale-component"
import { Cattle } from "../components/cattle-component"
import { Contact } from "../components/contact-component"
import { AppRenderer } from "../components/app-renderer-component"

export default function Template({ data, location }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const parsedPathname = location.pathname.replaceAll("/", "")

  if (parsedPathname === "longview-cattlesale" || parsedPathname === "sale") {
    return (
      <AppRenderer>
        <CattleForSale />
      </AppRenderer>
    )
  }

  if (
    parsedPathname === "longview-cattleshowcase" ||
    parsedPathname === "showcase"
  ) {
    return (
      <AppRenderer>
        <Cattle />
      </AppRenderer>
    )
  }

  if (
    parsedPathname === "longview-cattlecontact" ||
    parsedPathname === "contact"
  ) {
    return (
      <AppRenderer>
        <Contact />
      </AppRenderer>
    )
  }

  return (
    <AppRenderer>
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
    </AppRenderer>
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
