import { apiPrefix } from '../../etc/config.json';

export default {
    getAutos() {
        fetch(`${apiPrefix}/autos`)
        .then(function(data) {
            return data.ok ? data.text() : Promise.reject(data.status);
        })
    },
    getAttributes() {
        fetch(`${apiPrefix}/attributes`)
        .then(function(data) {
            return data.ok ? data.text() : Promise.reject(data.status);
        })
    },
    getColors() {
        fetch(`${apiPrefix}/colors`)
        .then(function(data) {
            return data.ok ? data.text() : Promise.reject(data.status);
        })
    },
    getCountries() {
        fetch(`${apiPrefix}/countries`)
        .then(function(data) {
            return data.ok ? data.text() : Promise.reject(data.status);
        })
    },
    getOptions() {
        fetch(`${apiPrefix}/options`)
        .then(function(data) {
            return data.ok ? data.text() : Promise.reject(data.status);
        })
    }
}