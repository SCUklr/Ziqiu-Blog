import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',  // 确保这里指向 Flask 后端的 5000 端口
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getPosts() {
    return apiClient.get('/posts');
  }
};
