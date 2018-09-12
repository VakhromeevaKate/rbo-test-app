import express from 'express';
import fs from 'fs';

const app = express();

app.get('/autos',(req,res) => {
    const autos = new Promise((resolve, reject) => {
        fs.readFile('../src/data-input/data-auto.csv','utf8',(error, data) => {
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
        fs.readFile('../src/data-input/data-attributes.csv','utf8',(error, data) => {
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
        fs.readFile('../src/data-input/data-colors.csv','utf8',(error, data) => {
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
        fs.readFile('../src/data-input/data-countries.csv','utf8',(error, data) => {
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
        fs.readFile('../src/data-input/data-options.csv','utf8',(error, data) => {
            if (error) return reject(error);
            console.log(data);
            return resolve(data);
        });
    }).then((options) => {
        console.log("then");
        res.send(options);}
        );
});

const server = app.listen(8080, () => {
    console.log("Server is listening at port 8080")
});
 export default app;