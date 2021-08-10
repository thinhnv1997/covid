import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row } from "antd";
import MainLayout from "../../components/MainLayout/MainLayout";

function NewDetail() {
  const { newId } = useParams();

  const dataNew = useSelector((state) => state.NewsReducer.data).filter(
    (item) => {
      return item.id === Number(newId);
    }
  );

  return (
    <MainLayout>
      <Row>
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <h2>{dataNew[0].title}</h2>
          <img src={dataNew[0].img} style={{ width: "80%", height: "auto" }} alt={"news"}/>
          <div>
            <p>{dataNew[0].description}</p>
          </div>
        </div>
      </Row>
    </MainLayout>
  );
}

export default NewDetail;
