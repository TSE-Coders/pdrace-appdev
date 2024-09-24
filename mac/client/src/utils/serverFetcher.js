import axios from 'axios';

// Get our configuration of our runtimes
const apiUrl = process.env.API_ENDPOINT_PATH || process.env.API_ENDPOINT_PORT;

// Create the axios instance
const serverApi = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
  },
});

export { serverApi };
