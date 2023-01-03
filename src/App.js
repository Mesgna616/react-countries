import React, { useState, useEffect } from "react";
import AllCountries from "./AllCountries.json";
import CardHolder from "./CardHolder.js";
import "./App.css";

function App() {
  const regions = [...new Set(AllCountries.map((country) => country.region))];
  const [countries, setCountries] = useState(AllCountries);
  const [regionsFilter, setRegionsFilter] = useState("All Regions");
  const [countriesFilter, setCountriesFilter] = useState("");

  useEffect(() => {
    console.log(AllCountries);
    setCountries(
      AllCountries.filter(
        (country) =>
          (regionsFilter === "All Regions" ||
            country.region
              .toLocaleLowerCase()
              .includes(regionsFilter.toLocaleLowerCase())) &&
          (countriesFilter === "" ||
            country.name
              .toLocaleLowerCase()
              .includes(countriesFilter.toLocaleLowerCase()))
      )
    );
  }, [regionsFilter, countriesFilter]);

  return (
    <>
      <div className="form-row m-5">
        <input id="input"
         className="form-control col-md-9 m-2"
         type= "search"
         placeholder=" search for countries"
         onChange={(e)=>setCountriesFilter(e.target.value)}
         />
         <select
          // id = "select"
          onChange={(e)=>setRegionsFilter(e.target.value)}
          className="form-control col-md-2 m-2"
          >
         <option> All Regions</option>
         {regions.map((region)=> (
          <option>{region}</option>))}
         </select>
      </div>
      <div className="card-deck p-1">
        {countries.map((country, index) => (
          <CardHolder data={country} index={index} />
        ))}
      </div>
    </>
  );
}

export default App;
