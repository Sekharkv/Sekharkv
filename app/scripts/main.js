import React from "react";
import ReactDOM from "react-dom";

import Menu from "./components/menu";
import Home from "./components/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchkey: "",
      showProd: false,
    };
  }
  onSearch = (e) => {
    this.setState({
      searchkey: e,
      showProd: true,
    });
  };

  render() {
    return (
      <div className="App">
        <Menu searchtext={this.onSearch} showProd={this.state.showProd} />
        <Home searchkey={this.state.searchkey} showProd={this.state.showProd} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
