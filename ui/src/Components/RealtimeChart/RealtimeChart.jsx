import React from "react";
import Chart from "react-apexcharts";

const options = {
  chart: {
    id: "realtime",
    height: 350,
    type: "line",
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 1000,
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Dynamic Updating Chart",
    align: "left",
  },
  markers: {
    size: 0,
  },
  yaxis: {
    max: 100,
  },
  legend: {
    show: false,
  },
};

const RealtimeChart = (props) => {
  return (
    <div id="chart">
      <Chart
        options={options}
        series={[{ data: props.data }]}
        type="line"
        height={350}
        width={350}
      />
    </div>
  );
};

export default RealtimeChart;
