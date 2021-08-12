import { Card, Col, Row, Spin } from "antd";
import React, { useState } from "react";

function Overview(props) {
  const { number1, number2, number3 } = props;

  return (
    <>
      <Row style={{ width: "95%", margin: "30px auto",textAlign:"center" }}>
        <Col span={8} style={{ padding: "0 5px" }}>
          <Spin spinning={!number1}>
            <Card
              bordered={false}
              style={{ border: "1px solid", borderRadius: "15px" }}
              title="Total Confirmed"
            >
              <p>{number1}</p>
            </Card>
          </Spin>
        </Col>

        <Col span={8} style={{ padding: "0 5px" }}>
          <Spin spinning={!number1}>
            <Card
              bordered={false}
              style={{ border: "1px solid", borderRadius: "15px" }}
              title="Total Recovered"
            >
              <p>{number2}</p>
            </Card>
          </Spin>
        </Col>

        <Col span={8} style={{ padding: "0 5px" }}>
          <Spin spinning={!number1}>
            <Card
              bordered={false}
              style={{ border: "1px solid", borderRadius: "15px" }}
              title="Total Deaths"
            >
              <p>{number3}</p>
            </Card>
          </Spin>
        </Col>
      </Row>
    </>
  );
}

export default Overview;
