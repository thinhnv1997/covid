import React from "react";
import mapData from "./mapData";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { Col, Row, Spin, Typography } from "antd";
import { useTranslation } from "react-i18next";
require("highcharts/modules/map")(Highcharts);

function Map() {
  const { t } = useTranslation();
  const dataMap = useSelector((state) => state.CovidReducer.globalMapData);
  const data = dataMap.Countries
    ? dataMap.Countries.map((country) => {
        return [country.CountryCode.toLowerCase(), country.TotalConfirmed];
      })
    : [];

  const mapOptions = {
    chart: {
      backgroundColor: "rgba(255,255,255,0.75)",
      resetZoomButton: {
        position: {
          align: "right",
          verticalAlign: "top",
          x: -20,
          y: 60,
        },
      },
    },
    title: {
      text: undefined,
    },

    mapNavigation: {
      enableButtons: true,
      enableDoubleClickZoom: true,
      buttonOptions: {
        align: "right",
        x: -20,
      },
    },

    legend: {
      title: {
        text: t("map.note"),
      },
      align: "right",
      verticalAlign: "bottom",
      floating: true,
      layout: "vertical",
      valueDecimals: 0,
      backgroundColor: "rgba(255,255,255,0.9)",
      symbolRadius: 0,
      symbolHeight: 14,
    },
    colorAxis: {
      dataClassColor: [
        "#4572A7",
        "#AA4643",
        "#89A54E",
        "#80699B",
        "#3D96AE",
        "#DB843D",
        "#92A8CD",
        "#A47D7C",
        "#B5CA92",
      ],
      dataClasses: [
        {
          to: 5000,
        },
        {
          from: 5001,
          to: 50000,
        },
        {
          from: 50001,
          to: 500000,
        },
        {
          from: 500001,
          to: 5000000,
        },
        {
          from: 5000000,
        },
      ],
    },

    series: [
      {
        mapData: mapData,
        name: t("map.info"),
        data: data,
      },
    ],
  };
  return (
    <Row style={{ width: "95%", margin: "0 auto" }}>
      <Col span={24}>
        <Typography.Title level={2} style={{ margin: "10px 0" }}>
          {t("map.title")}
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Spin spinning={!dataMap.Countries}>
          <HighchartsReact
            options={mapOptions}
            constructorType={"mapChart"}
            highcharts={Highcharts}
          />
        </Spin>
      </Col>
    </Row>
  );
}

export default Map;
