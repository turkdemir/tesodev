import React from "react";

class Search extends React.Component {
 
  render() {
    return (
        <div className=" row d-flex justify-content-between" style={{
          fontSize: 16,
          color: "#CFD8E3",
        }} >
          <div className="m-2 col-9">
            
            <input className="form-control"
              id="searchInput"
              type="text"
              placeholder="Search"
              onChange={this.props.handleInput}
              style={{ fontSize: "18px", fontWeight: "700", padding:"10px 40px" }}

            />
          </div>
          <div className="m-2 pl-2 col-2 text-nowrap">
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
        </div>
    );
  }
}

export default Search;
