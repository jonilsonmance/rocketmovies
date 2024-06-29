import axios from "axios";

export const api = axios.create({
    baseURL:'https://backend-movies-f4lp.onrender.com'
});