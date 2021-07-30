import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../../components/Chart/Chart";

function CountryDetail() {
  const [dataCountry, setDataCountry] = useState(null);
  const { country } = useParams();

  const BASE_URL = "https://api.covid19api.com/total/country/";

  const fetchData = (params = "Afghanistan") => {
    axios({
      url: BASE_URL + params,
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
      <Chart
        dataProps={{
          title: country + " Total Confirmed",
          data: changeData("Confirmed"),
        }}
      />
      <Chart
        dataProps={{
          title: country + " Total Deaths",
          data: changeData("Deaths"),
        }}
      />
      <Chart
        dataProps={{
          title: country + " Total Recovered",
          data: changeData("Recovered"),
        }}
      />
    </div>
  );
}

export default CountryDetail;
