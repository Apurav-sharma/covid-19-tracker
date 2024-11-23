import React from "react";
import { NativeSelect, FormControl } from "@mui/material";
import axios from "axios";

function Countrypicker({setcountry}) {
  const url = "https://disease.sh/v3/covid-19";
  var [countries, setCountry] = React.useState();

  React.useEffect(() => {
    async function getcountry() {
      var response = await axios.get(`${url}/countries`);
      setCountry(response.data);
    }
    getcountry();
  }, []);

  function handleChange(e) {
    setcountry(e.target.value);
  }

  return (
    <FormControl>
      <NativeSelect defaultValue="india" onChange={handleChange}>
        <option value="india">India</option>
        {countries &&
          countries.map((c) => <option value={c.country}>{c.country}</option>)}
      </NativeSelect>
    </FormControl>
  );
}

export default Countrypicker;
