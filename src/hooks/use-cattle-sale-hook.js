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
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges;
}