
export default function PrepareData(autos, attributes, colors, countries, options){
  autos=prepareDataAuto(autos);
  
  autos.forEach(auto => {
    countries.forEach(country => {
      if (country.ISO.toUpperCase() === auto.CountryISO.toUpperCase()) {
        auto.Country = country.Description;
      }
    });
    colors.forEach(color => {
      if (color.Attribute.indexOf(auto.Id) !== -1) {
        auto.ColorId = color.ID;
      }
    });
    options.forEach(option => {
      if (option.ID.indexOf(auto.Id) !== -1) {
        auto.OptionsId += option.Attribute + ';';
      }
    });
    attributes.forEach(attribute => {
      if (attribute.ID === auto.ColorId) {
        auto.Color = attribute.Description;
      }
      if (auto.OptionsId.indexOf(attribute.ID) !== -1) {
        auto.Options += attribute.Description + ';';
      }
    })
  });
  return autos;
}

function prepareDataAuto(data){
  let result=[];
  let buffer;
  let model;
  if (data instanceof Array){
    for(let i=0; i< data.length; i++){
      buffer = data[i].Description.split(' ');
      model = buffer.slice(1, buffer.length - 3 ).join(' ');
      result.push({
        'Row': i,
        'Id': data[i].ID, 
        'Mark': buffer[0], 
        'CountryISO': buffer[buffer.length - 1],
        'Year': buffer[buffer.length - 2],
        'Type': buffer[buffer.length - 3],
        'Model': model,
        'Country': null,
        'Color': '',
        'ColorId': null,
        'Options': '',
        'OptionsId': ''
      });
    }
  } 
  return result;
}
