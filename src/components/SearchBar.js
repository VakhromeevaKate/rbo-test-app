import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.filterTextInput.value
    );
  }
    render() {
      return (
          <div className="SearchBar">
            <div>
              <label>Group By: </label>
              <button className="SearchBarButton" onClick={this.groupByMark}>Mark</button>
              <button className="SearchBarButton" onClick={this.groupByType}>Type</button>
            </div>
            <div>
              <label>Sort By: </label>
              <button className="SearchBarButton" onClick={this.sortByMark}>Mark</button>
              <button className="SearchBarButton" onClick={this.sortByType}>Type</button>
              <button className="SearchBarButton" onClick={this.sortByYear}>Year</button>
            </div>
            <input className="SearchBarInput" type="text" placeholder="Search..."
              value={this.props.filterText}
              ref={(input) => this.filterTextInput = input}
              onChange={this.handleChange}
              />
          </div>
      );
    };

    groupByMark = () => {
      console.log("groupByMark");
    };
    groupByType = () => {
      console.log("groupByType");
    };
    sortByMark = () => {
      console.log("sortByMark");
    };
    sortByType = () => {
      console.log("sortByType");
    };
    sortByYear = () => {
      console.log("sortByYear");
    };

  }
  
  export default SearchBar;
  