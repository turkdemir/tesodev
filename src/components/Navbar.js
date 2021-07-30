import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <header style={{ backgroundColor: "#fff" }}>
        <div
          id="sub_nav"
          className="container d-flex justify-content-between align-items-center"
          style={{ padding: "0  0 104px 0", marginTop: "32px" }}
        >
          <div id="page_title">
            <img
              src="logo.png"
              alt="logo"
              style={{ width: "278px", height: "115px" }}
            />
          </div>
          <div>
            <Link to={"/add"} style={{ textAlign: "center" }}>
              <button
                type="button"
                className="btn btn-primary d-flex align-items-center ml-auto"
                style={{
                  backgroundColor: "#204080",
                  borderColor: "transparent",
                  padding: "10px 40px",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
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
      </header>
    );
  }
}

export default NavBar;
