import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Card from "./Components/Card";
import Search from "./Components/Search";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Guntakal");

  const fetchAPI = async () => {
    const response =
      await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c35e9221096841eb986140132232603&q=${search}
    `);
    const resJSON = await response.json();
    setCity(resJSON);
  };
  useEffect(() => {
    fetchAPI();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mx-0">
          <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
            <Search setSearch={setSearch} fetchAPI={fetchAPI} />
            <Card city={city} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
