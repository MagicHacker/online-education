/**
 * 封装axios
 */
import Axios from "axios";
// 开发环境
const baseDevUrl = "http://localhost:3000/";
// 生产环境
const baseProdUrl = "";

const service = Axios.create({
  baseURL: process.env.NODE_ENV === "development" ? baseDevUrl : baseProdUrl,
  timeout: 10000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json:charset=UTF-8"
  }
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截器
service.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);
