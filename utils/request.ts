import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: "http://localhost:1337/api", // 基地址
  timeout: 10000, // 请求超时时间：10秒
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 例如：获取并设置token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    const res = response.data;

    // 根据自定义错误码判断请求是否成功
    if (res.code && res.code !== 200) {
      // 处理业务错误
      console.error("Business error:", res.message || "未知错误");

      // 例如：401未授权，可能是token过期
      if (res.code === 401) {
        // 清除用户信息并重定向到登录页
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      return Promise.reject(new Error(res.message || "未知错误"));
    }

    return res;
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response) {
      const { status } = error.response;
      let message = "";

      // 根据HTTP状态码处理错误
      switch (status) {
        case 400:
          message = "请求错误";
          break;
        case 401:
          message = "未授权，请重新登录";
          // 清除用户信息并重定向到登录页
          localStorage.removeItem("token");
          window.location.href = "/login";
          break;
        case 403:
          message = "拒绝访问";
          break;
        case 404:
          message = "请求地址出错";
          break;
        case 408:
          message = "请求超时";
          break;
        case 500:
          message = "服务器内部错误";
          break;
        case 501:
          message = "服务未实现";
          break;
        case 502:
          message = "网关错误";
          break;
        case 503:
          message = "服务不可用";
          break;
        case 504:
          message = "网关超时";
          break;
        default:
          message = `连接出错(${status})!`;
      }

      console.error(`Response error (${status}):`, message);
    } else {
      // 请求被取消或者网络问题
      console.error("Network error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default service;
