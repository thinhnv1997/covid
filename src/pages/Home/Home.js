import React, { useCallback, useEffect } from "react";
import axios from "axios";
import Chart from "../../components/Chart/Chart";
import { CovidAction } from "../../redux/rootActions";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map/Map";

function Home() {
  const dispatch = useDispatch();
  const dataChart = useSelector((state) => state.CovidReducer.globalChartData);

  const fetchData = useCallback(() => {
    axios({
      url: "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
      method: "GET",
    })
      .then((res) => {
        dispatch(CovidAction.fetchGlobalChartData(res.data));
      })
      .catch((error) => {});

    axios({
      url: "https://api.covid19api.com/summary",
      method: "GET",
    })
      .then((res) => {
        const dataTable = res.data.Countries.map((country) => {
          return { ...country, key: country.CountryCode };
        });
        dispatch(CovidAction.fetchTableData(dataTable));
        dispatch(CovidAction.fetchGlobalMapData(res.data));
      })
      .catch((error) => {});
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <Map />

      <Chart
        dataProps={{
          title: "Global Total Confirmed",
          data: dataChart.cases,
        }}
      ></Chart>
      <Chart
        dataProps={{
          title: "Global Total Deaths",
          data: dataChart.deaths,
        }}
      ></Chart>
      <Chart
        dataProps={{
          title: "Global Total Recovered",
          data: dataChart.recovered,
        }}
      ></Chart>
    </div>
  );
}

export default Home;
