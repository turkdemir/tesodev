import React, { useState } from "react";

import Search from "./Search";
import NavBar from "./Navbar";
import Content from "./Content";
var mockData = require("../mockData.json");

function Home(props) {
  const [inputVal, setinputVal] = useState(props.inputVal || "");
  const [filtered, setfiltered] = useState([]);

  const handleInput = (e) => {
    setinputVal(e.target.value);
    props.handleInput(e.target.value)
  };

  const handleSearch = () => {
    const filteredItems = mockData.data.filter((item) =>
      item.join(",").toLowerCase().includes(inputVal.toLowerCase())
    );
    setfiltered(filteredItems);
  };

  console.log(inputVal, filtered);

  // let noResultsMessage = (this.state.filteredItems.map((item, index) => {
  //     return item.id === "" ? <div key={index}>No results found!</div> : ''
  //   }));
  return (
    <main className="container p-0 rounded" style={{ backgroundColor: "#FFF" , maxWidth: "862px", margin:"0 auto"}}>
      <NavBar />
      <Search handleInput={handleInput} handleSearch={handleSearch} />
      <Content filtered={filtered} />
      {/* {noResultsMessage} */}
    </main>
  );
}

export default Home;
