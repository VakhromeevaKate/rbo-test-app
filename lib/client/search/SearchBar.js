import React from 'react';

const SearchBar = props => {
  const handleChange = event => {
    props.onUserInput(
    event.target.value);

  };
  const handleClickGroupByMark = () => {
    props.onGroupByMark();
  };
  const handleClickGroupByType = () => {
    props.onGroupByType();
  };
  const handleClickSortByMark = () => {
    props.onSortByMark();
  };
  const handleClickSortByType = () => {
    props.onSortByType();
  };
  const handleClickSortByYear = () => {
    props.onSortByYear();
  };

  return (
    React.createElement("div", { className: "SearchBar" },
    React.createElement("div", null,
    React.createElement("label", null, "Group By: "),
    React.createElement("button", { className: "SearchBarButton", onClick: handleClickGroupByMark }, "Mark"),
    React.createElement("button", { className: "SearchBarButton", onClick: handleClickGroupByType }, "Type")),

    React.createElement("div", null,
    React.createElement("label", null, "Sort By: "),
    React.createElement("button", { className: "SearchBarButton", onClick: handleClickSortByMark }, "Mark"),
    React.createElement("button", { className: "SearchBarButton", onClick: handleClickSortByType }, "Type"),
    React.createElement("button", { className: "SearchBarButton", onClick: handleClickSortByYear }, "Year")),

    React.createElement("input", { className: "SearchBarInput", type: "text", placeholder: "Search...",
      value: props.filterText,
      onChange: handleChange })));



};
export default SearchBar;