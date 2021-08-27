import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
let mockData = require("../mockData.json");

function Content(props) {
  const [state, setstate] = useState([]);

  useEffect(() => {
    setstate(props.filtered);
  }, [props.filtered]);

  return (
    <div className="container p-3" style={{ width: "700px", margin: "0 auto" }}>
      <div
        className="align-self-end"
        style={{ position: "absolute", right: "15%" }}
      >
        <i
          className="fas fa-exchange-alt rotate"
          style={{ position: "relative", left: "20px" }}
        ></i>
        <select
          className="px-4 custom-select"
          id="inputGroupSelect01"
          style={{ width: "180px", border: "none" }}
          onChange={props.sortBy}
        >
          <option value="0">Order By</option>
          <option value="NameA">Name ascending</option>
          <option value="NameD">Name descending</option>
          <option value="YearA">Year ascending</option>
          <option value="YearD">Year descending</option>
        </select>
      </div>

      <table
        className="table table-hover table-sm"
        style={{ width: "100%", height: "600px" }}
      >
        <thead>
          <tr>
            {mockData.cols.map((element, index) => {
              return (
                <th scope="col" key={index}>
                  {element}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {state &&
            state.length > 0 &&
            state.map((element, index) => {
              return (
                <tr key={index}>
                  {element.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Content;
