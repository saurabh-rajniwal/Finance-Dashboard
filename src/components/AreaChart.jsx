import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [300, 500, 400, 600, 700, 800], // Y-axis data
      fill: true, // Makes it an area chart
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white to create a shadow effect
      borderColor: "white", // White line
      borderWidth: 3, // Thicker border for stronger contrast
      tension: 0.4, // Smooth the line
    },
  ],
};

const options = {
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

function AreaChart() {
  return (
    <div className="bg-custom-purple p-4 rounded-2xl ">
      <p className="text-white pl-3">Profit & Loss</p>
      <p className="text-white font-bold text-4xl pl-3">$682.5</p>
      <Line data={data} options={options} />
    </div>
  );
}

export default AreaChart;
