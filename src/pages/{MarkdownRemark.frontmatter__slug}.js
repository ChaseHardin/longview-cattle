import React from "react"
import { graphql } from "gatsby"
import { NavigationBar } from "../components/navigation/navbar-component"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <NavigationBar />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.name}</h1>
          <h2>{frontmatter.type}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
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
