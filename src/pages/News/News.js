import { Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import MainLayout from "../../components/MainLayout/MainLayout";
import NewCard from "./NewCard/NewCard";

function News() {
  const dataNews = useSelector((state) => state.NewsReducer.data);

  return (
    <MainLayout>
      <Row>
        {dataNews.map((item) => {
          return <NewCard data={item} key={"new" + item.id} />;
        })}
      </Row>
    </MainLayout>
  );
}

export default News;
