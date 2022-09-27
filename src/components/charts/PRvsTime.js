import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import LineGraphHandler from "../../controllers/LineGraphHandler";
const Charttttttt = () => {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    const fetchChartData = async () => {
      const res = await LineGraphHandler();
      setChartData(res);
    };
    fetchChartData();
  }, []);

  var maxPRS;
  if (chartData) {
    chartData.forEach((el) => {
      el.noOfPRs > maxPRS ? (maxPRS = el.noOfPRs) : (maxPRS = maxPRS);
    });
  }

  // linear-gradient(90deg, #FFE27D 0%, #64E3FF 50.52%, #9192FF 100%)
  // var gradient = linear-gradient(90deg, #FFE27D 0%, #64E3FF 50.52%, #9192FF 100%)
  if (chartData) {
    const userData = {
      labels: chartData.map((el) => el.timeStrap),
      datasets: [
        {
          label: "No. Of PRs",
          data: chartData.map((el) => el.noOfPRs),
          backgroundColor: [
            "rgb(253,226,126,1)",
            // "rgb(157,227,207,1)",
            // "rgb(114,196,255,1)",
            // "rgb(142,148,254,1)",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        yAxis: [
          {
            ticks: {
              min: -1,
              padding: 80,
            },
          },
        ],
      },
    };

    return (
      <div className="">
        <Line
          className="bg-white"
          id="canvas"
          data={userData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                min: 0,
                max: maxPRS > 10 ? maxPRS + 10 : 5,
                ticks: {
                  stepSize: 1,
                },
              },
            },
          }}
        />
      </div>
    );
  }
  return (
    <div class="flex justify-center items-center space-x-2 w-full bg-white  rounded overflow-hidden shadow-lg">
      <div
        class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Charttttttt;
