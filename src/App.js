import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import List from "./components/List";
import Home from "./components/Home";
import AddItem from "./components/AddItem"

class App extends React.Component {

  state= {inputVal:""}

handleInput = data => {
  this.setState({
    inputVal: data
  });
}
  

  render() {
    console.log(this.state)
    return (
      <div >
        <Switch>
        <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                handleInput={this.handleInput}
                inputVal={this.state.inputVal}
                />
                )}
                />
        <Route
            exact
            path="/list"
            render={(props) => (
              <List
              {...props}
              inputVal={this.state.inputVal}
              handleInput={this.handleInput}
              />
            )}
          />
        <Route
            exact
            path="/add"
            render={(props) => (
              <AddItem
              {...props}
              />
            )}
          />
          
        </Switch>
      </div>
    );
  }
}

export default App;
