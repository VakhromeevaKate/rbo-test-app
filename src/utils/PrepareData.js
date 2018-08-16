
export default function PrepareData(autos, attributes, colors, countries, options){
    let result = [];
    autos=prepareDataAuto(autos);
    autos.forEach(auto => {
        countries.forEach(country => {
            if (country.ISO.toUpperCase() === auto.CountryISO.toUpperCase()) {
                auto.Country = country.Description;
            };
        });
        colors.forEach(color => {
            if (color.Attribute.indexOf(auto.Id) !== -1) {
                auto.ColorId = color.ID;
            };
        });
        attributes.forEach(attribute => {
            if (attribute.ID === auto.ColorId) {
                auto.Color = attribute.Description;
            }; 
        })
    });
    console.log([autos]);
    result = autos;
    return result;
}

function prepareDataAuto(data){
    let result=[];
    let buffer;
    let model;
    if (data instanceof Array){
        for(let i=0; i< data.length; i++){
            buffer = data[i].Description.split(' ');
            model = buffer.slice(1, buffer.length - 3 ).join(' ');
            result.push(
                {
                    'Id': data[i].ID, 
                    'Mark': buffer[0], 
                    'CountryISO': buffer[buffer.length - 1],
                    'Year': buffer[buffer.length - 2],
                    'Type': buffer[buffer.length - 3],
                    'Model': model,
                    'Country': null,
                    'Options': null,
                    'Color': '',
                    'ColorId': null,
                    'Options': ''
                });
        }
    } 
    return result;
}
function prepareDataAttributes(data){
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
    return result;
}
/*function prepareDataColors(data, output){
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
}*/

