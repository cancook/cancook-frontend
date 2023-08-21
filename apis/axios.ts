import axios, { AxiosError } from 'axios';

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://momokji.shop.shop/api'
    : 'http://localhost:3000/api';

// const BASE_URL = 'https://self-dining.shop/api';

const axiosClient = (() => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.code === 'ECONNABORTED') {
        alert('서버에 이상이 있습니다.');
      }
      switch (error.response?.status) {
        case 401:
          console.warn('401: 인증정보 없음');
          break;
        case 403:
          console.warn('403: 권한 없음');
          break;
        case 404:
          console.warn('404: 대상을 찾지 못함');
          break;
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
          console.warn(`${error.response?.status}: 서버 오류`);
          break;
        default:
          console.error(`${error.response?.status}: unhandled error!`);
          break;
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
})();

export default axiosClient;
