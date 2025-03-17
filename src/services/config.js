import axios from "axios";

const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;
const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  function (config) {
    // const userSession = getSessionVar(sessionVar.user);
    // if (userSession) {
    //     config.headers.Authorization = `Basic ${userSession.accessToken}`;
    //     config.headers["X-CSRF-Token"] = `${userSession.csrfToken}`;
    // }
    config.headers.Authorization = `Basic ${encodedCredentials}`;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default instance;
