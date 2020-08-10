import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
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
      <Col xs="12" md="6" className="p-0">
        <div className="product-image-wrapper">
          <img src={props.image} alt="anh"></img>
        </div>
      </Col>
      <Col xs="12" md="6" className="product-info-wrapper">
        <div>
          <h2 className="text-primary">{props.name}</h2>
        </div>
        <div>
          <h5 className="text-info">Model: {props.model}</h5>
        </div>
        <div className="product-detail">
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        </div>
        <div>
          <Button color="info">Liên hệ tư vấn</Button>
        </div>
      </Col>
    </Row>
  )
}
function Right(props) {
  return (
    <Row className="product-container">
      <Col
        xs={{ size: 12, order: 2 }}
        md={{ size: 6, order: 1 }}
        className="product-info-wrapper"
      >
        <div>
          <h2 className="text-primary">{props.name}</h2>
        </div>
        <div>
          <h5 className="text-info">Model: {props.model}</h5>
        </div>
        <div className="product-detail">
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        </div>
        <div>
          <Button color="info">Liên hệ tư vấn</Button>
        </div>
      </Col>
      <Col
        xs={{ size: 12, order: 1 }}
        md={{ size: 6, order: 2 }}
        className="p-0"
      >
        <div className="product-image-wrapper">
          <img src={props.image} alt="anh"></img>
        </div>
      </Col>
    </Row>
  )
}
