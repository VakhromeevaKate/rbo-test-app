import express from 'express';
import fs from 'fs';
import Papa from 'papaparse';
import { serverPort, dataPaths, papaConfig } from '../etc/config.json';

const app = express();

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

app.get('/',(req,res) => {
    console.log(dataPaths);
})

app.get('/autos',(req,res) => {
    const autos = new Promise((resolve, reject) => {
        fs.readFile(dataPaths.autos,'utf8',(error, data) => {
            if (error) return reject(error);
            data = Papa.parse(data, papaConfig).data;
            return resolve(data);
        });
    }).then((autos) => {
        res.send({"autos": autos});}
        );
});
app.get('/attributes',(req,res) => {
    const attributes = new Promise((resolve, reject) => {
        fs.readFile(dataPaths.attributes,'utf8',(error, data) => {
            if (error) return reject(error);
            data = Papa.parse(data, papaConfig).data;
            return resolve(data);
        });
    }).then((attributes) => {
        res.send({"attributes": attributes});}
        );
});
app.get('/colors',(req,res) => {
    const colors = new Promise((resolve, reject) => {
        fs.readFile(dataPaths.colors,'utf8',(error, data) => {
            if (error) return reject(error);
            data = Papa.parse(data, papaConfig).data;
            return resolve(data);
        });
    }).then((colors) => {
        res.send({"colors": colors});}
        );
});
app.get('/countries',(req,res) => {
    const countries = new Promise((resolve, reject) => {
        fs.readFile(dataPaths.countries,'utf8',(error, data) => {
            if (error) return reject(error);
            data = Papa.parse(data, papaConfig).data;
            return resolve(data);
        });
    }).then((countries) => {
        res.send({"countries": countries});}
        );
});
app.get('/options',(req,res) => {
    const options = new Promise((resolve, reject) => {
        fs.readFile(dataPaths.options,'utf8',(error, data) => {
            if (error) return reject(error);
            if (error) return reject(error);
            data = Papa.parse(data, papaConfig).data;
            return resolve(data);
        });
    }).then((options) => {
        res.send({"options": options});}
        );
});

const server = app.listen(serverPort, () => {
    console.log("Server is listening at port " + serverPort)
});
 export default app;