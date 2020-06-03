import React, { useState, useEffect } from "react";
/* Components */
import Experience from "./Experience";
import Education from "./Education";
/* Antd */
import { Col, Row } from "antd";

function Content() {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Experience />
      </Col>
      <Col span={8}>
        <Education />
      </Col>
      <Col span={8}></Col>
    </Row>
  );
}

export default Content;
