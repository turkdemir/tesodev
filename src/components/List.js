import React, { useState, useCallback, useEffect } from "react";

import SearchBar from "./SearchBar";
import ContentList from "./ContentList";
import Pagination from "./Pagination";

var mockData = require("../mockData.json");

function Home(props) {
  const [inputVal, setinputVal] = useState(props.inputVal || "");
  const [filtered, setfiltered] = useState([]);
  const [pageOfItems, setpageOfItems] = useState([]);
  const [sorted, setsorted] = useState(false);

  const handleInput = (e) => {
    setinputVal(e.target.value);
    props.handleInput(e.target.value);
  };

  const handleSearch = () => {
    const filteredItems = mockData.data.filter((item) =>
      item.join(",").toLowerCase().includes(inputVal.toLowerCase())
    );
    //console.log(filteredItems)
    setfiltered(filteredItems);
  };


  useEffect(() => {
    const filteredItems = mockData.data.filter((item) =>
      item.join(",").toLowerCase().includes(props.inputVal.toLowerCase())
    );

    setfiltered(filteredItems);
  }, [])


  const sortBy = (e) => {
    if (e) {
      if (e.target.value === "NameA") {
        const sortedItems = filtered.sort((a, b) =>
          a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0
        );
        setfiltered(sortedItems);
        setsorted(!sorted);
      } else if (e.target.value === "NameD") {
        const sortedItems = filtered.sort((a, b) =>
          a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : 0
        );
        setfiltered(sortedItems);
        setsorted(!sorted);
      } else if (e.target.value === "YearA") {
        const sortedItems = filtered.sort(
          (a, b) => a[3].split("/")[2] - b[3].split("/")[2]
        );
        setfiltered(sortedItems);
        setsorted(!sorted);
      } else if (e.target.value === "YearD") {
        const sortedItems = filtered.sort(
          (a, b) => b[3].split("/")[2] - a[3].split("/")[2]
        );
        setfiltered(sortedItems);
        setsorted(!sorted);
      } else {
        handleSearch()
      }
    }
  };

  const onChangePage = (pageOfItems) => {
    setpageOfItems(pageOfItems);
  };
  const arr = ["helll", "04/02/1979"];
  //console.log(arr[1].split("/")[2]);
  //console.log(inputVal, sorted, pageOfItems, filtered);

  return (
    <main className="container p-0 rounded" style={{ backgroundColor: "#FFF" }}>
      <SearchBar handleInput={handleInput} handleSearch={handleSearch} inputVal={props.inputVal} />
      <ContentList filtered={pageOfItems} sortBy={sortBy} />
      <Pagination
        items={filtered}
        sorted={sorted}
        setsorted={setsorted}
        onChangePage={onChangePage}
      />
    </main>
  );
}

export default Home;
