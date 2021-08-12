import { Badge, Card, Col, Row, Space, Spin } from "antd";
import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import { Typography } from "antd";

Highcharts.setOptions({
  lang: {
    rangeSelectorZoom: "Filter by",
  },
});

const { Title } = Typography;
moment.suppressDeprecationWarnings = true;

function Chart(props) {
  const { title, data = null, color } = props.dataProps;
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
    // colors: [
    //   // "#2b908f",
    //   // "#90ee7e",
    //   // "#f45b5b",
    //   // "#7798BF",
    //   // "#aaeeee",
    //   // "#ff0066",
    //   // "#eeaaee",
    //   // "#55BF3B",
    //   // "#DF5353",
    //   // "#7798BF",
    //   "#aaeeee",
    // ],
    // chart: {
    //   backgroundColor: {
    //     linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
    //     stops: [
    //       [0, "#2a2a2b"],
    //       [1, "#3e3e40"],
    //     ],
    //   },
    // },
    rangeSelector: {
      // buttonTheme: {
      //   fill: '#505053',
      //   stroke: '#000000',
      //   style: {
      //      color: '#CCC'
      //   },
      //   states: {
      //      hover: {
      //         fill: '#707073',
      //         stroke: '#000000',
      //         style: {
      //            color: 'white'
      //         }
      //      },
      //      select: {
      //         fill: '#000003',
      //         stroke: '#000000',
      //         style: {
      //            color: 'white'
      //         }
      //      }
      //   }},
      buttonTheme: {
        fill: "none",
        stroke: "none",
        "stroke-width": 0,
        padding: 10,
        r: 5,
      },
      allButtonsEnabled: true,
      inputPosition: {
        align: "right",
        x: 0,
        y: 0,
      },
      buttonPosition: {
        align: "left",
        x: 0,
        y: 0,
      },
      buttons: [
        {
          type: "week",
          count: 1,
          text: "Week",
          dataGrouping: {
            forced: true,
            units: [["day", [1]]],
          },
        },
        {
          type: "month",
          count: 1,
          text: "Month",
          dataGrouping: {
            forced: true,
            units: [["week", [1]]],
          },
        },
        {
          type: "all",
          text: "All",
          dataGrouping: {
            forced: true,
            units: [["month", [1]]],
          },
        },
      ],
      selected: 3,
    },
    xAxis: {
      type: "datetime",
    },
    navigator: {
      enabled: false,
    },

    scrollbar: {
      enabled: false,
    },
    plotOptions: {
      series: {
        color: color,
      },
    },
    series: [
      {
        name: "Total cases",
        data: dataChart,
      },
    ],
  };

  return (
    <Spin spinning={!data}>
      <Row style={{ width: "80%", margin: "30px auto" }}>
        <Col span={24}>
          <Space>
            <Title level={3} style={{ color: color }}>
              {title}
            </Title>
          </Space>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options}
          />
        </Col>
      </Row>
    </Spin>
  );
}

export default Chart;
