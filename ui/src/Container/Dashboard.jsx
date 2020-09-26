import React from "react";
import Chart from "../Components/RealtimeChart/RealtimeChart";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const charts = useSelector((state) => state.chartsReducer);

  return (
    <div>
      <span>Hearbeats:{charts.counter}</span>
      <Chart data={charts.chart1} />
      <Chart data={charts.chart2} />
      <Chart data={charts.chart3} />
      <Chart data={charts.chart4} />
    </div>
  );
};

export default Dashboard;
