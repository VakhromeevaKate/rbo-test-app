import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClickSortByMark = this.handleClickSortByMark.bind(this);
    this.handleClickSortByType = this.handleClickSortByType.bind(this);
    this.handleClickSortByYear = this.handleClickSortByYear.bind(this);
  }

  handleChange() {
    console.log('I am here: handleChange')
    this.props.onUserInput(
      this.filterTextInput.value
    );
  }
  handleClickGroupByMark() {
    console.log('I am here: handleClickGroupByMark')
  }
  handleClickGroupByType() {
    console.log('I am here: handleClickGroupByType')
  }
  handleClickSortByMark() {
    console.log('I am here: handleClickGroupByType')
    this.props.onSortByMark(
      this.props.onSortByMark
    );
  }
  handleClickSortByType() {
    console.log('I am here: handleClickSortByType')
    this.props.onSortByType(
      this.props.onSortByType
    );
  }
  handleClickSortByYear() {
    console.log('I am here: handleClickSortByYear')
    this.props.onSortByYear(
      this.props.onSortByYear
    );
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
    };
  }
  
  export default SearchBar;
  