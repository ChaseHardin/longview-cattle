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
              slug
              sex
              type
              cert
              semen
              price
              abhaUrl
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