import React from 'react';

const SearchBar = (props) => {
    const handleChange = (event) => {
        props.onUserInput(
            event.target.value
        );
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
        <div className="SearchBar">
            <div>
                <label>Group By: </label>
                <button className="SearchBarButton" onClick={handleClickGroupByMark}>Mark</button>
                <button className="SearchBarButton" onClick={handleClickGroupByType}>Type</button>
            </div>
            <div>
                <label>Sort By: </label>
                <button className="SearchBarButton" onClick={handleClickSortByMark}>Mark</button>
                <button className="SearchBarButton" onClick={handleClickSortByType}>Type</button>
                <button className="SearchBarButton" onClick={handleClickSortByYear}>Year</button>
            </div>
            <input className="SearchBarInput" type="text" placeholder="Search..."
                value={props.filterText}
                onChange={handleChange}
            />
        </div>
    );
};
export default SearchBar;
