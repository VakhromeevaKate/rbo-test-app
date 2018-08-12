import React from 'react';
import CSVReader from 'react-csv-reader';

class GetDataFromCSV extends Comment {
    render() {
        return (
            <CSVReader 
            cssClass="csv-input"
            label="Select CSV with secret Death Star statistics"
            onFileLoaded={this.handleForce}
            onError={this.handleDarkSideForce}
            inputId="ObiWan"
            />
        );
    }
}