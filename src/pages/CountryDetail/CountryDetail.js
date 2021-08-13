import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import Flags from "country-flag-icons/react/3x2";
import { Col, Row, Space, Typography } from "antd";
import Overview from "../../components/Overview/Overview";
import { useTranslation } from "react-i18next";

function CountryDetail() {
  const { t } = useTranslation();

  const [dataCountry, setDataCountry] = useState(null);
  const { params } = useParams();
  const countryFlag = params.substring(0, 2);
  const country = params.substring(3, params.length);

  const Flag = Flags[countryFlag];

  const BASE_URL = "https://api.covid19api.com/total/country/";

  const fetchData = (country = "Afghanistan") => {
    axios({
      url: BASE_URL + country,
      method: "GET",
    })
      .then((res) => {
        setDataCountry(res.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchData(country);
  }, [country]);

  const changeData = (type) => {
    let data = {};
    if (!dataCountry) {
      return null;
    } else {
      if (type === "Confirmed") {
        for (let item of dataCountry) {
          data = { ...data, [item.Date]: item.Confirmed };
        }
      }
      if (type === "Deaths") {
        for (let item of dataCountry) {
          data = { ...data, [item.Date]: item.Deaths };
        }
      }
      if (type === "Recovered") {
        for (let item of dataCountry) {
          data = { ...data, [item.Date]: item.Recovered };
        }
      }
      return data;
    }
  };

  return (
    <div>
      <Row style={{ width: "95%", margin: " 20px auto" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <Space align="baseline">
            <Flag style={{ width: "45px", height: "30px" }} />

            <Typography.Title level={2}>{country}</Typography.Title>
          </Space>
        </Col>
        <Col span={24}>
          {dataCountry ? (
            <Overview
              number1={dataCountry[dataCountry.length - 1].Confirmed}
              number2={dataCountry[dataCountry.length - 1].Recovered}
              number3={dataCountry[dataCountry.length - 1].Deaths}
            />
          ) : null}
        </Col>
      </Row>
      <Chart
        dataProps={{
          title: t("chart.country-confirmed"),
          data: changeData("Confirmed"),
          color: "red",
        }}
      />
      <Chart
        dataProps={{
          title: t("chart.country-recovered"),
          data: changeData("Recovered"),
          color: "green",
        }}
      />
      <Chart
        dataProps={{
          title: t("chart.country-deaths"),
          data: changeData("Deaths"),
          color: "#434343",
        }}
      />
    </div>
  );
}

export default CountryDetail;
