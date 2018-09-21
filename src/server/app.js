import express from 'express';
import fs from 'fs';
import Papa from 'papaparse';
import { serverPort, dataPaths, papaConfig } from '../etc/config.json';

function readFileCSV(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    return Papa.parse(data, papaConfig).data;
}

const app = express();
const dictionaries = {
    colors: readFileCSV(dataPaths.colors),
    attributes: readFileCSV(dataPaths.attributes),
    countries: readFileCSV(dataPaths.countries),
    options: readFileCSV(dataPaths.options)
};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.get('/', (req, res) => {
    // console.log(dataPaths);
    res.send('Ok');
});

app.get('/api/dictionaties', (req, res) => {
    res.send(dictionaries);
});

app.get('/api/autos/list', (req, res) => {
    new Promise((resolve, reject) => {
        fs.readFile(dataPaths.autos, 'utf8', (error, data) => {
            if (error) {
                return reject(error);
            }
            const newData = Papa.parse(data, papaConfig).data;
            return resolve(newData);
        });
    }).then((dataAutos) => {
        res.send({ autos: dataAutos });
    });
});

app.get('/api/attributes/list', (req, res) => {
    new Promise((resolve, reject) => {
        fs.readFile(dataPaths.attributes, 'utf8', (error, data) => {
            if (error) {
                return reject(error);
            }
            const newData = Papa.parse(data, papaConfig).data;
            return resolve(newData);
        });
    }).then((dataAttributes) => {
        res.send({ attributes: dataAttributes });
    });
});

app.get('/api/colors/list', (req, res) => {
    new Promise((resolve, reject) => {
        fs.readFile(dataPaths.colors, 'utf8', (error, data) => {
            if (error) {
                return reject(error);
            }
            const newData = Papa.parse(data, papaConfig).data;
            return resolve(newData);
        });
    }).then((dataColors) => {
        res.send({ colors: dataColors });
    });
});

app.get('/api/countries/list', (req, res) => {
    new Promise((resolve, reject) => {
        fs.readFile(dataPaths.countries, 'utf8', (error, data) => {
            if (error) {
                return reject(error);
            }
            const newData = Papa.parse(data, papaConfig).data;
            return resolve(newData);
        });
    }).then((dataCountries) => {
        res.send({ countries: dataCountries });
    });
});

app.get('/api/options/list', (req, res) => {
    new Promise((resolve, reject) => {
        fs.readFile(dataPaths.options, 'utf8', (error, data) => {
            if (error) {
                return reject(error);
            }
            const newData = Papa.parse(data, papaConfig).data;
            return resolve(newData);
        });
    }).then((dataOptions) => {
        res.send({ options: dataOptions });
    });
});

app.listen(serverPort, () => {
    // console.log('Server is listening at port ' + serverPort);
});
export default app;
