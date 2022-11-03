import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../src/App.css";
import Nav from "../Nav";

export default function Sales() {
  const [totals, setTotals] = useState([]);
  const [Todaytotals, setTodaytotals] = useState([]);

  // total sales
  useEffect(() => {
    fetch("https://bookameal-backend.herokuapp.com/totals")
      .then((response) => response.json())
      .then((data) => {
        setTotals(data);
        // console.log(data)
      });
  }, []);

  // totals sales in a day
  useEffect(() => {
    fetch("https://bookameal-backend.herokuapp.com/Todaytotals")
      .then((response) => response.json())
      .then((data) => {
        setTodaytotals(data);
        // console.log(data)
      });
  }, []);

  return (
    <div className="">
      <Nav />
      <br />
      <h2> OVERALL TOTAL SALES MADE: ${totals}</h2>
      <br />
      <h2>TOTAL SALES FOR TODAY ONLY: ${Todaytotals}</h2>
    </div>
  );
}