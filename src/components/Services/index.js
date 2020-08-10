import React from "react"
import { Row, Container } from "reactstrap"
import CardService from "./CardService"
import { graphql, StaticQuery } from "gatsby"
export default function ServiceCards() {
  return (
    <Container className="services-container">
      <Row>
        <StaticQuery
          query={servicesQuery}
          render={data => {
            return data.allMarkdownRemark.edges.map(({ node }, i) => {
              return (
                <CardService
                  title={node.frontmatter.title}
                  color={node.frontmatter.color}
                  content={node.excerpt}
                />
              )
            })
          }}
        />
      </Row>
    </Container>
  )
}
const servicesQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(services)/" } }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            title
            color
          }
          excerpt(format: HTML)
        }
      }
    }
  }
`
