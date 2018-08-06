import React, { Component } from 'react';

class SearchBar extends React.Component {
    render() {
      return (
        <form>
          <div className="SearchBar">
          <div>
            <label>Group By: </label>
            <button className="SearchBarButton" onClick="groupByMark">Mark</button>
            <button className="SearchBarButton" onClick="groupByType">Type</button>
          </div>
          <div>
            <label>Sort By: </label>
            <button className="SearchBarButton" onClick="sortByMark">Mark</button>
            <button className="SearchBarButton" onClick="sortByType">Type</button>
            <button className="SearchBarButton" onClick="sortByYear">Year</button>
          </div>
          <input className="SearchBarInput" type="text" placeholder="Search..." />
          </div>
        </form>
      );
    }
  }
  export default SearchBar;
  