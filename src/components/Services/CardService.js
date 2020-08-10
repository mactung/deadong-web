import React from "react"
import { Col } from "reactstrap"
export default function CardService({ title, content, color }) {
  return (
    <Col
      xs="6"
      md="4"
      lg="3"
      className="card-service-wrapper pt-5 pl-3 pr-3"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="card-service-text mb-3">
        <h5>{title}</h5>
      </div>
      <div
        className="service-content-text"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Col>
  )
}
