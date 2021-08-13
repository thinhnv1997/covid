import { Card, Col, Row, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NewCard(props) {
  const { t } = useTranslation();
  const { data } = props;

  return (
    <Col xs={24} lg={12} style={{ padding: "20px" }}>
      <Card
        title={data.source.name}
        extra={
          <Link to={`/news-detail/${data.source.id}`}>
            {t("news.read-more")}
          </Link>
        }
        style={{ minHeight: "231px" }}
      >
        <Row>
          <Col xs={24} sm={12} style={{ textAlign: "center" }}>
            <img
              style={{ width: "200px", height: "100px" }}
              src={data.urlToImage}
              alt="news"
            ></img>
          </Col>
          <Col xs={24} sm={12}>
            <Typography.Paragraph>{data.title}</Typography.Paragraph>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default NewCard;
