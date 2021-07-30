import React from "react";
import mapData from "./mapData";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
require("highcharts/modules/map")(Highcharts);

function Map() {
  const dataMap = useSelector((state) => state.CovidReducer.globalMapData);
  const data = dataMap.Countries
    ? dataMap.Countries.map((country) => {
        return [country.CountryCode.toLowerCase(), country.TotalConfirmed];
      })
    : [];

  const mapOptions = {
    title: {
      text: undefined,
    },

    mapNavigation: {
      enableButtons: true,
      enableDoubleClickZoomTo: true,
    },

    legend: {
      title: {
        text: "Total cases per country",
      },
      align: "left",
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
          from: 5000001,
        },
      ],
    },

    series: [
      {
        mapData: mapData,
        name: "Total Confirmed ",
        data: data,
      },
    ],
  };
  return (
    <div style={{ width: "95%", margin: "0 auto" }}>
      <HighchartsReact
        options={mapOptions}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </div>
  );
}

export default Map;
