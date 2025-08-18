import axios from 'axios';

// Base API configuration
const createApiConfig = (token, useCache = true) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    
    // Add no-cache header for fresh data requests
    if (!useCache) {
        config.headers['Cache-Control'] = 'no-cache';
    }
    
    return config;
};

// API helper functions
export const apiGet = async (url, token, useCache = true) => {
    const config = createApiConfig(token, useCache);
    return axios.get(url, config);
};

export const apiPost = async (url, data, token, useCache = true) => {
    const config = createApiConfig(token, useCache);
    return axios.post(url, data, config);
};

export const apiPut = async (url, data, token, useCache = true) => {
    const config = createApiConfig(token, useCache);
    return axios.put(url, data, config);
};

export const apiDelete = async (url, token, useCache = true) => {
    const config = createApiConfig(token, useCache);
    return axios.delete(url, config);
};

// Specific API calls that need fresh data
export const fetchFreshData = async (url, token) => {
    return apiGet(url, token, false); // false = no cache
};

// API calls that can use cache
export const fetchCachedData = async (url, token) => {
    return apiGet(url, token, true); // true = use cache
};
