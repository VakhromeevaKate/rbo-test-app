import React from 'react';

class SearchBar extends React.Component {

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
            ref={(input) => this.filterTextInput = input}
            onChange={this.handleChange}
            />
        </div>
    );
  }
}
  
export default SearchBar;
  