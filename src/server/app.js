import express from 'express';
import fs from 'fs';
import { serverPort, dataPaths } from '../etc/config.json';

const app = express();

app.get('/',(req,res) => {
    console.log(dataPaths);
})

app.get('/autos',(req,res) => {
    const autos = new Promise((resolve, reject) => {
        fs.readFile(dataPaths.autos,'utf8',(error, data) => {
            if (error) return reject(error);
            console.log(data);
            return resolve(data);
        });
    }).then((autos) => {
        console.log("then");
        res.send(autos);}
        );
});
app.get('/attributes',(req,res) => {
    const attributes = new Promise((resolve, reject) => {
        fs.readFile(dataPaths.attributes,'utf8',(error, data) => {
            if (error) return reject(error);
            console.log(data);
            return resolve(data);
        });
    }).then((attributes) => {
        console.log("then");
        res.send(attributes);}
        );
});
app.get('/colors',(req,res) => {
    const autos = new Promise((resolve, reject) => {
        fs.readFile(dataPaths.colors,'utf8',(error, data) => {
            if (error) return reject(error);
            console.log(data);
            return resolve(data);
        });
    }).then((colors) => {
        console.log("then");
        res.send(colors);}
        );
});
app.get('/countries',(req,res) => {
    const countries = new Promise((resolve, reject) => {
        fs.readFile(dataPaths.countries,'utf8',(error, data) => {
            if (error) return reject(error);
            console.log(data);
            return resolve(data);
        });
    }).then((countries) => {
        console.log("then");
        res.send(countries);}
        );
});
app.get('/options',(req,res) => {
    const options = new Promise((resolve, reject) => {
        fs.readFile(dataPaths.options,'utf8',(error, data) => {
            if (error) return reject(error);
            console.log(data);
            return resolve(data);
        });
    }).then((options) => {
        console.log("then");
        res.send(options);}
        );
});

const server = app.listen(serverPort, () => {
    console.log("Server is listening at port " + serverPort)
});
 export default app;