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

  const componentLookup = {
    sale: <CattleForSale/>,
    herd: <Cattle/>,
    contact: <Contact/>
  }[parsedPathname];

  if(componentLookup) {
    return (
      <AppRenderer>
        {componentLookup}
      </AppRenderer>
    )
  }

  return (
    <AppRenderer>
      <div className="template-buffer">
          <div>
            <h1>{frontmatter.name}</h1>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
