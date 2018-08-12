import Papa from 'papaparse';
import autoDataset from '../data-input/data-auto.csv';
import $ from "jquery";
import attributesDataset from '../data-input/data-attributes.csv';
import colorsDataset from '../data-input/data-colors.csv';
import countriesDataset from '../data-input/data-countries.csv';
import optionsDataset from '../data-input/data-options.csv';

const papa_config = {
    delimiter: ',',
    quoteChar: '"',
    escapeChar: '"',
    header: true,
    trimHeaders: false
};

class GetDataFromCSV {
    constructor(){
        getAutosData(papa_config, this.autos);
        getAttributesData(papa_config, this.attributes);
        getColorsData(papa_config, this.colors);
        getCountriesData(papa_config, this.countries);
        getOptionsData(papa_config, this.options);
    }
}

function loadingtask(data, config)
{
    return Papa.parse(data, config).data;
}

function prepareDataAuto(data, output){
    let result=[];
    let buffer;
    let model;
    if (data instanceof Array){
        for(let i=0; i< data.length; i++){
            buffer = data[i].Description.split(' ');
            model = buffer.slice(1, buffer.length - 4 ).join(' ');
            result.push(
                {
                    'Id': data[i].ID, 
                    'Mark': buffer[0], 
                    'Country': buffer[buffer.length - 1],
                    'Year': buffer[buffer.length - 2],
                    'Type': buffer[buffer.length - 3],
                    'Model': model
                });
        }
    } 
    output = result;
    return result;
}
function prepareDataAttributes(data, output){
    let result=[];
    if (data instanceof Array){
        for(let i=0; i< data.length; i++){
            result.push(
                {
                    'Id': data[i].ID, 
                    'Attribute': data[i].Description
                });
        }
    } 
    output = result;
    return result;
}
function prepareDataColors(data, output){
    let result=[];
    if (data instanceof Array){
        for(let i=0; i< data.length; i++){
            result.push(
                {
                    'AttributeId': data[i].ID, 
                    'Attribute': data[i].Attribute
                });
        }
    } 
    output = result;
    return result;
}
function prepareDataCountries(data, output){
    let result=[];
    if (data instanceof Array){
        for(let i=0; i< data.length; i++){
            result.push(
                {
                    'ISO': data[i].ISO, 
                    'Description': data[i].Description
                });
        }
    } 
    output = result;
    return result;   
}
function prepareDataOptions(data, output){
    let result=[];
    if (data instanceof Array){
        for(let i=0; i< data.length; i++){
            result.push(
                {
                    'Attribute': data[i].Attribute, 
                    'Id': data[i].ID
                });
        }
    } 
    output = result;
    return result;   
}


function getAutosData(config,type, output)
{
    $.ajax({
        url: autoDataset,
        method: "get",
        type: "text",
        success:  function(data) {
            type = loadingtask(data, config);
            prepareDataAuto(type, output);
        }
    });
}
function getAttributesData(config,type, output)
{
    $.ajax({
        url: attributesDataset,
        method: "get",
        type: "text",
        success:  function(data) {
            type = loadingtask(data, config);
            
            prepareDataAttributes(type, output);
        }
    });
}
function getColorsData(config,type, output)
{
    $.ajax({
        url: colorsDataset,
        method: "get",
        type: "text",
        success:  function(data) {
            type = loadingtask(data, config);
            prepareDataColors(type, output);
        }
    });
}
function getCountriesData(config,type, output)
{
    $.ajax({
        url: countriesDataset,
        method: "get",
        type: "text",
        success:  function(data) {
            type = loadingtask(data, config);
            prepareDataCountries(type, output);
        }
    });
}
function getOptionsData(config,type, output)
{
    $.ajax({
        url: optionsDataset,
        method: "get",
        type: "text",
        success:  function(data) {
            type = loadingtask(data, config);
            prepareDataOptions(type, output);
        }
    });
}

export default GetDataFromCSV
