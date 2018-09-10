import React, { PureComponent } from 'react';

class SearchBar extends PureComponent {
  render() {
    return (
        <div className="SearchBar">
          <div>
            <label>Group By: </label>
            <button className="SearchBarButton" onClick={this.handleClickGroupByMark}>Mark</button>
            <button className="SearchBarButton" onClick={this.handleClickGroupByType}>Type</button>
          </div>
          <div>
            <label>Sort By: </label>
            <button className="SearchBarButton" onClick={this.handleClickSortByMark}>Mark</button>
            <button className="SearchBarButton" onClick={this.handleClickSortByType}>Type</button>
            <button className="SearchBarButton" onClick={this.handleClickSortByYear}>Year</button>
          </div>
          <input className="SearchBarInput" type="text" placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleChange}
            />
        </div>
    );
  }
  handleChange = (event) => {
    this.props.onUserInput(
      event.target.value
    );
  }
  handleClickGroupByMark = () => {
    this.props.onGroupByMark();
  }
  handleClickGroupByType = () => {
    this.props.onGroupByType();
  }
  handleClickSortByMark = () => {
    this.props.onSortByMark();
  }
  handleClickSortByType = () => {
    this.props.onSortByType();
  }
  handleClickSortByYear = () => {
    this.props.onSortByYear();
  }
}
  
export default SearchBar;
  