import React from "react";
import Chart from "react-apexcharts";

const StatisticsChart = () => {
  const series = [
    {
      name: "Data",
      data: [
        { x: 0, y: 0 },
        { x: 12, y: 50 },
        { x: 13, y: 100 },
        { x: 14, y: 150 },
        { x: 15, y: 200 },
        { x: 16, y: 150 },
        { x: 17, y: 100 },
      ],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
    },
    xaxis: {
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    yaxis: {
      min: 0,
      max: 200,
    },
  };

  return (
    <div className="chart">
      <Chart options={options} series={series} type="line" />
    </div>
  );
};

export default StatisticsChart;
