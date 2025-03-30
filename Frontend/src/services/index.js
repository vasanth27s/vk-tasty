import axios from "axios";

const LOCAL_URL = "http://localhost:8080";
const RENDER_URL = "https://vk-tasty.onrender.com";
const BASE_URL = window.location.hostname === "localhost" ? LOCAL_URL : RENDER_URL;

export const getHeaders = () => {
    let token = "";
    if (sessionStorage.getItem("token")) {
        token = sessionStorage.getItem("token");
    }
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*" // Ensure this matches the backend's CORS configuration
        },
    };
};

export const _get = (str) => {
    return axios.get(`${BASE_URL}/${str}`, getHeaders()).then(res => res.data);
};

export const _post = (str, data) => {
    return axios.post(`${BASE_URL}/${str}`, data, getHeaders()).then(res => res.data);
};

export const _put = (str, data) => {
    return axios.put(`${BASE_URL}/${str}`, data, getHeaders()).then(res => res.data);
};

export const _patch = (str, data) => {
    return axios.patch(`${BASE_URL}/${str}`, data, getHeaders()).then(res => res.data);
};

export const _delete = (str) => {
    return axios.delete(`${BASE_URL}/${str}`, getHeaders()).then(res => res.data);
};
