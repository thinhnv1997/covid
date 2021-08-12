import React, { useCallback, useEffect } from "react";
import axios from "axios";
import Chart from "../../components/Chart/Chart";
import { CovidAction } from "../../redux/rootActions";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map/Map";
import Title from "antd/lib/skeleton/Title";
import Overview from "../../components/Overview/Overview";

function Home() {
  const dispatch = useDispatch();
  const globalOverView = useSelector(
    (state) => state.CovidReducer.globalOverview
  );
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
        url: "https://disease.sh/v3/covid-19/all",
        method: "GET",
      })
        .then((res) => {
          dispatch(CovidAction.fetchGlobalOverView(res.data));
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
      <div>
        <Title level={1} style={{ textAlign: "center" }}>
          WHO Coronavirus (COVID-19) Dashboard
        </Title>
      </div>
      
      <Map />
      
      
      <Overview number1={globalOverView.cases} number2={globalOverView.recovered} number3={globalOverView.deaths}/>

      <Chart
        dataProps={{
          title: "Global confirmed cases chart:",
          data: dataChart.cases,
          color:"red"
        }}
      ></Chart>
      <Chart
        dataProps={{
          title: "Global recovered cases chart:",
          data: dataChart.recovered,
          color:"green"
        }}
      ></Chart>
      <Chart
        dataProps={{
          title: "Global deaths cases chart:",
          data: dataChart.deaths,
          color:"gray"
        }}
      ></Chart>
      
    </div>
  );
}

export default Home;
