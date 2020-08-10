import React from "react"
import { Container, Row, Col } from "reactstrap"
export default function Product(props) {
  return (
    <Container className="product-container">
      {props.structure === "left" ? <Left {...props} /> : <Right {...props} />}
    </Container>
  )
}
function Left(props) {
  return (
    <Row className="product-container">
      <Col xs="6" className="p-0">
        <div className="product-image-wrapper"></div>
      </Col>
      <Col xs="6">
        <div className="product-info-wrapper">
          <div>
            <h2>{props.name}</h2>
          </div>
          <div>
            <h3>Model: {props.model}</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        </div>
      </Col>
    </Row>
  )
}
function Right(props) {
  return (
    <Row className="product-container">
      <Col xs="6">
        <div className="product-info-wrapper">
          <div>
            <h2>{props.name}</h2>
          </div>
          <div>
            <h3>Model: {props.model}</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        </div>
      </Col>
      <Col xs="6" className="p-0">
        <div className="product-image-wrapper"></div>
      </Col>
    </Row>
  )
}
