import { Col } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

function NewCard(props) {
  const history = useHistory();
  const dataNew = props.data;

  return (
    <Col span={12}>
      <div
        className="newcard"
        style={{ width: "80%", margin: "0 auto", padding: "20px" }}
      >
        <img src={dataNew.img} style={{ width: "100%", height: "auto" }} alt={"news"}/>
        <div
          style={{ cursor: "pointer" }}
          className="new-info"
          onClick={() => {
            history.push(`/news-detail/${dataNew.id}`);
          }}
        >
          <h4>{dataNew.title}</h4>
        </div>
      </div>
    </Col>
  );
}

export default NewCard;
