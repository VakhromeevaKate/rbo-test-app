import React from 'react';

class SearchBar extends React.Component {
    render() {
      return (
        <form>
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
          <input className="SearchBarInput" type="text" placeholder="Search..." />
          </div>
        </form>
      );
    }

    groupByMark = () => {
      console.log("groupByMark");
    }
    groupByType = () => {
      console.log("groupByType");
    }
    sortByMark = () => {
      console.log("sortByMark");
    }
    sortByType = () => {
      console.log("sortByType");
    }
    sortByYear = () => {
      console.log("sortByYear");
    }

  }
  
  export default SearchBar;
  