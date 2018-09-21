import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';

export default {
    getAutos() {
        return axios.get(`${apiPrefix}/api/autos/list`);
    },
    getAttributes() {
        return axios.get(`${apiPrefix}/api/attributes/list`);
    },
    getColors() {
        return axios.get(`${apiPrefix}/api/colors/list`);
    },
    getCountries() {
        return axios.get(`${apiPrefix}/api/countries/list`);
    },
    getOptions() {
        return axios.get(`${apiPrefix}/api/options/list`);
    }
};
