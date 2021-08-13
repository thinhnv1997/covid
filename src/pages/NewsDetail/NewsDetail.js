import { Col, Row, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MainLayout from "../../components/MainLayout/MainLayout";

function NewsDetail(props) {
  const { newsId } = useParams();
  const data = useSelector((state) => state.NewsReducer.data);
  const news = data.filter((item) => item.source.id === Number(newsId))[0];

  return (
    <MainLayout>
      <Row style={{ width: "95%", margin: "20px auto" }}>
        <Col span={24}>
          <Typography.Title level={3}>{news.title} </Typography.Title>{" "}
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <img
            alt="news"
            src={news.urlToImage}
            style={{ width: "50%", margin: "20px auto", maxHeight: "3000px" }}
          ></img>
        </Col>
        <Col span={24}>
          <Typography.Paragraph>{news.description}</Typography.Paragraph>
          <Typography.Paragraph>{news.content}</Typography.Paragraph>
          <Typography.Paragraph>
            View more at: <a href={news.url}>{news.url}</a>
          </Typography.Paragraph>
        </Col>
      </Row>
    </MainLayout>
  );
}

export default NewsDetail;
