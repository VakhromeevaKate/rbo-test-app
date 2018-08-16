
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
        options.forEach(option => {
            if (option.ID.indexOf(auto.Id) !== -1) {
                auto.Options += option.Attribute + ';';
            };
        });
        attributes.forEach(attribute => {
            if (attribute.ID === auto.ColorId) {
                auto.Color = attribute.Description;
            }; 
            if (attribute.ID === auto.ColorId) {
                auto.Color = attribute.Description;
            }
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
                    'Row': i,
                    'Id': data[i].ID, 
                    'Mark': buffer[0], 
                    'CountryISO': buffer[buffer.length - 1],
                    'Year': buffer[buffer.length - 2],
                    'Type': buffer[buffer.length - 3],
                    'Model': model,
                    'Country': null,
                    'Options': '',
                    'Color': '',
                    'ColorId': null,
                    'OptionsId': null
                });
        }
    } 
    return result;
}
