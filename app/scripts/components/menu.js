import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingSearch: false,
      showMenu: true,
      mobMenuShow: false,
    };
    this.onSearch = this.onSearch.bind(this);
    this.showSearchContainer = this.showSearchContainer.bind(this);
  }

  componentDidMount() {}

  showSearchContainer(e) {
    e.preventDefault();
    this.setState({
      showingSearch: !this.state.showingSearch,
      searchT: "",
    });
  }

  onSearch(e) {
    e.preventDefault();
    if (e.target.value != "") {
      console.log(e.target.value);
      this.setState({ showingSearch: true });
      this.props.searchtext(e.target.value.toLowerCase());
    } else {
      this.props.searchtext("Noresult");
    }
  }

  render() {
    return (
      <header className={`menu ${this.state.mobMenuShow ? "active" : null}`}>
        <h1>ELC</h1>
        <ul className={`navCon ${this.state.mobMenuShow ? "active" : null}`}>
          <li>
            <a href="" className="nav-item">
              HOLIDAY
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="nav-item">WHAT'S NEW</a>
          </li>
          <li>
            {" "}
            <a className="nav-item">PRODUCTS</a>
          </li>
          <li>
            {" "}
            <a className="nav-item">BESTSELLERS</a>
          </li>
          <li>
            {" "}
            <a className="nav-item">GOODBYES</a>
          </li>
          <li>
            {" "}
            <a className="nav-item">STORES</a>
          </li>
          <li>
            {" "}
            <a className="nav-item">INSPIRATION</a>
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="search-bar"
              value={this.state.searchT}
              onChange={(e) => {
                this.onSearch(e);
                this.setState({ ...this.state, searchT: e.target.value });
              }}
              autoFocus
            />
            <a onClick={(e) => this.setState({ ...this.state, searchT: "" })}>
              <i className="material-icons close close-icon">close</i>
            </a>
            <a onClick={(e) => this.showSearchContainer(e)}>
              <i className="material-icons search">search</i>
            </a>
          </li>
        </ul>

        <div
          className={`hamburger ${this.state.mobMenuShow ? "active" : null}`}
          onClick={() => {
            this.setState({
              ...this.state,
              mobMenuShow: !this.state.mobMenuShow,
            });
          }}
        >
          <span className={`bar`}></span>
        </div>
      </header>
    );
  }
}

module.exports = Menu;
