import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import AvatarImg from "../assets/avatar_Save.png";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
  datasets: [
    {
      label: "Product A",
      data: [250, 180, 150, 100, 120, 125],
      backgroundColor: "#322659",
      borderRadius: 20,
      barThickness: 20,
    },
    {
      label: "Product B",
      data: [-50, -100, -90, -70, -80, -95],
      backgroundColor: "#ED8936",
      borderRadius: 20,
      barThickness: 20,
    },
  ],
};

const options = {
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      display: false,
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      display: false,
      beginAtZero: true,
    },
  },
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },
};

function StackChart() {
  return (
    <div className="bg-white rounded-[20px] p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-custom-light-grey text-sm pl-3">Total Saves</p>
          <p className="text-custom-purple font-bold text-2xl pl-3">$6.682</p>
        </div>
        <div>
          <img src={AvatarImg} alt="Image" />
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default StackChart;
