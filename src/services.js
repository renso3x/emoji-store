import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchEmojisAPI(params) {
  return axios.get(`${API_URL}/products?${params}`);
}

export function fetchAdsAPI() {
  return `${API_URL}/ads/?r=${Math.floor(Math.random() * 1000)}`;
}
