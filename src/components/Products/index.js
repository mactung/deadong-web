import React from "react"
import { Container } from "reactstrap"
import Product from "./Product"
import { graphql, StaticQuery } from "gatsby"
export default function Products() {
  return (
    <Container className="pt-5 pb-5">
      <StaticQuery
        query={productsQuery}
        render={data => {
          return data.allMarkdownRemark.edges.map(({ node }, i) => {
            let structure = "right"
            if (i % 2 === 0) {
              structure = "left"
            }
            return (
              <Product
                structure={structure}
                name={node.frontmatter.name}
                model={node.frontmatter.model}
                image={node.frontmatter.images.publicURL}
                description={node.excerpt}
              />
            )
          })
        }}
      />
    </Container>
  )
}

const productsQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(products)/" } }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            name
            order
            model
            images {
              publicURL
            }
          }
          excerpt(format: HTML)
        }
      }
    }
  }
`
