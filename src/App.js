import React, { useState, useEffect } from "react";
import Cards from "./components/cards/cards";
import Chart from "./components/chart/chart";
import Countrypicker from "./components/countryPicker/countryPicker";
import "bootstrap/dist/css/bootstrap.min.css";
import Fetchdata from "./api/index";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  var [country, setcountry] = useState("india");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await Fetchdata(country);
      setData(fetchedData);
    };

    fetchData();
  }, [country]);

  useEffect(() => {
    console.log(country)
  }, [country]);


  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <div className="mt-5">
        <h1>COVID - 19</h1>
      </div>
      <div>
        <Cards data={data} />
      </div>
      <div>
        <Countrypicker setcountry={setcountry} />
      </div>
      <div>
        <Chart data={data} />
      </div>
    </div>
  );
}

export default App;
