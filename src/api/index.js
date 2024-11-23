import axios from "axios";

const url1 = "https://disease.sh/v3/covid-19/countries/india";
const url2 = "https://disease.sh/v3/covid-19/historical/india?lastdays=30";
const url = "https://disease.sh/v3/covid-19";

const Fetchdata = async (country) => {
  try {
    var Url1 = url1;
    var Url2 = url2;
    if (country) {
      Url1 = `${url}/countries/${country}`;
      Url2 = `${url}/historical/${country}?lastdays=50`;
    }
    const {
      data: { deaths, recovered, active, cases, todayCases },
    } = await axios.get(Url1);
    const historical = await axios.get(Url2);

    return {
      deaths,
      recovered,
      active,
      cases,
      todayCases,
      historical: historical.data.timeline,
    };
  } catch (error) {
    console.error(`Error fetching data:`, error);
    return null;
  }
};

export default Fetchdata;
