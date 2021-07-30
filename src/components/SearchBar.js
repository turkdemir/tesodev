import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
 
  render() {
    return (
        <div className="container m-4 d-flex justify-content-around align-items-center" 
        style={{
          fontSize: 16,
          color: "#CFD8E3",
        }} >
          <div id="page_title" >
          <Link to={"/"} style={{ textAlign: "center" }}> 
            <img src="logo.png" alt="logo" style={{ width: "149px", height : "63px" }}/>
        </Link>
        </div>
          <div >
            
            <input className="form-control"
            defaultValue={this.props.inputVal}
              id="searchInput"
              type="text"
              placeholder="Search"
              onChange={this.props.handleInput}
              style={{ fontSize: "18px", fontWeight: "700", padding:"10px 10px" }}

            />
          </div>
          <div className=" pl-2 text-nowrap">
            <button
              type="button"
              id="clearFilter"
              className="btn btn-secondary"
              style={{ backgroundColor: "#204080", borderColor: "transparent", padding:"10px 40px",fontSize: "18px", fontWeight: "700" }}
              onClick={this.props.handleSearch}
            >
              Search
            </button>
          </div>
          <div>
          <Link to={"/add"} style={{ textAlign: "center" }}>
            <button
              type="button"
              className="btn btn-primary d-flex align-items-center ml-auto"
              style={{ backgroundColor: "#204080", borderColor: "transparent", padding:"10px 40px",fontSize: "18px", fontWeight: "700" }}
            >
              <span
                className="pl-2"
                style={{ color: "#FFF", fontSize: "18px", fontWeight: "700" }}
              >
                Add New Record
              </span>
            </button>
            </Link>
          </div>
        </div>
    );
  }
}

export default SearchBar;
