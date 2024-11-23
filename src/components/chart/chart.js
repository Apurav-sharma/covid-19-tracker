import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ data }) {
  const [dailyData, setDailyData] = useState(null);
  const [dates, setDates] = useState(null);

  useEffect(() => {
    if (data && data.historical) {
      setDailyData(data.historical);
      setDates(Object.keys(data.historical.cases || {}));
    }
  }, [data]);

  if (!data || !data.historical) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: dates || [],
    datasets: [
      {
        label: "Total Cases",
        data: Object.values(dailyData?.cases || {}),
        borderColor: "rgba(0, 0, 255, 0.5)",
        fill: false,
      },
      {
        label: "Recovered",
        data: Object.values(dailyData?.recovered || {}),
        borderColor: "rgba(0, 255, 0, 0.5)",
        fill: false,
      },
      {
        label: "Deaths",
        data: Object.values(dailyData?.deaths || {}),
        borderColor: "rgba(255, 0, 0, 0.5)",
        fill: false,
      },
    ],
  };

  const LineChart = dailyData ? <Line style={{width: "900px", height: "auto"}} data={chartData} /> : null;

  return <div>{LineChart}</div>;
}

export default Chart;
