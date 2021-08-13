import { Col, Row, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import MainLayout from "../../components/MainLayout/MainLayout";
import NewCard from "./NewCard/NewCard";

function News() {
  const { t } = useTranslation();
  const data = useSelector((state) => state.NewsReducer.data);

  return (
    <MainLayout>
      <Row justify={"center"}>
        <Col span={24}>
          <Typography.Title
            style={{ textAlign: "center", color: "red", marginTop: "20px" }}
          >
            {t("news.title")}
          </Typography.Title>
        </Col>
        {data.map((news) => {
          return <NewCard data={news} key={news.source.id} />;
        })}
      </Row>
    </MainLayout>
  );
}

export default News;
