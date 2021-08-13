import React from "react";
import { Card, Col, Row, Spin } from "antd";
import { useTranslation } from "react-i18next";

function Overview(props) {
  const { number1, number2, number3 } = props;
  const { t } = useTranslation();
  return (
    <>
      <Row style={{ width: "95%", margin: "30px auto", textAlign: "center" }}>
        <Col span={8} style={{ padding: "0 5px" }}>
          <Spin spinning={!number1}>
            <Card
              bordered={false}
              style={{ border: "1px solid", borderRadius: "15px" }}
              title= {t("overView.confirmed")}
              headStyle={{ color: "red" }}
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
              title={t("overView.recovered")} 
              headStyle={{ color: "green" }}
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
              title= {t("overView.deaths")}  
              headStyle={{ color: "#434343" }}
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
