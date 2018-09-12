import { apiPrefix } from '../../etc/config.json';
import axios from 'axios'

export default {
    getAutos() {
        return axios.get(`${apiPrefix}/autos`);
    },
    getAttributes() {
        return axios.get(`${apiPrefix}/attributes`);
    },
    getColors() {
        return axios.get(`${apiPrefix}/colors`);
    },
    getCountries() {
        return axios.get(`${apiPrefix}/countries`);
    },
    getOptions() {
        return axios.get(`${apiPrefix}/options`);
    }
}