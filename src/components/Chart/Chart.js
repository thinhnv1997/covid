import { Col, Row } from "antd";
import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
moment.suppressDeprecationWarnings = true;

function Chart(props) {
  const { title, data = [] } = props.dataProps;
  const changeData = (data) => {
    if (data) {
      let result = [];
      let dataList = Object.entries(data);
      result = dataList.map((item) => {
        const date = moment(item[0]).format("YYYY MM DD");
        return {
          name: item[0],
          x: moment.utc(date).valueOf(),
          y: item[1],
        };
      });
      return result;
    } else {
      return null;
    }
  };

  const dataChart = changeData(data);

  const options = {
    rangeSelector: {
      allButtonsEnabled: true,
      inputPosition: {
        align: "left",
        x: 20,
        y: 0,
      },
      buttonPosition: {
        align: "right",
        x: 0,
        y: 0,
      },
      buttons: [
        {
          type: "week",
          count: 1,
          text: "Day",
          dataGrouping: {
            forced: true,
            units: [["day", [1]]],
          },
        },
        {
          type: "month",
          count: 1,
          text: "Week",
          dataGrouping: {
            forced: true,
            units: [["day", [7]]],
          },
        },
        {
          type: "all",
          text: "Month",
          dataGrouping: {
            forced: true,
            units: [["month", [1]]],
          },
        },
      ],
      selected: 3,
    },

    navigator: {
      enabled: false,
    },

    scrollbar: {
      enabled: false,
    },
    series: [
      {
        data: dataChart,
      },
    ],
  };

  return (
    <Row style={{ padding: "20px" }}>
      <Col span={8} style={{ marginTop: "5%" }}>
        <p>{title + ":"}</p>
        <p>
          {data ? Object.values(data)[Object.values(data).length - 1] : null}
        </p>
      </Col>
      <Col span={16} style={{ padding: "20px" }}>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        />
      </Col>
    </Row>
  );
}

export default Chart;
