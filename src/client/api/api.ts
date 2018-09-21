import axios from 'axios';
// I still need to understand how to import that (config)
// import { apiPrefix } from '../../etc/config.json';

const apiPrefix: string = 'http://127.0.0.1:8080';

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
  },
};
