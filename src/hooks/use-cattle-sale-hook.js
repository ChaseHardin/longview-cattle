import { useStaticQuery, graphql } from "gatsby"

export const useCattleForSale = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              name
              shortDescription
              slug
              sex
              type
              cert
              semen
              featuredImage {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
            excerpt
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges;
}