import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: "https://uniontracking-3.frogi.dev/api/"
});

export default clienteAxios;

/* developer@ceawebsystems.com */