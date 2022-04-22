import React from "react";
import Products from "./Products";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="home">
        <Products
          searchkey={this.props.searchkey}
          showProd={this.props.showProd}
        />
      </section>
    );
  }
}
export default Home;
