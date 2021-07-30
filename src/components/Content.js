import React, { Component } from "react";
import { Link } from "react-router-dom";
let mockData = require("../mockData.json");

export class Content extends Component {

  render() {
    const filteredItems = this.props.filtered.length > 3 ? this.props.filtered.slice(0,3) : this.props.filtered;

    return (
      <div className="card p-3">
        <table className="table table-hover table-sm" >
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
            {filteredItems.map((element, index) => {
              return (
                  <tr key={index}>
                    {element.map((item,index)=><td key={index}>{item}</td>)}
                </tr>
              );
            })}
          </tbody>
        </table>
        {
            this.props.filtered.length > 3 ?
            <Link to={"/list"} style={{ textAlign: "center"}}>
            <span style={{ fontSize: "12px", fontWeight:"700", cursor:"pointer"}}>Show More...</span>
            </Link>
            :
            ""
        }
      </div>
    );
  }
}

export default Content;
