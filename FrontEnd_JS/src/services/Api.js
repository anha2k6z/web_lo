// api.js
import axios from '../axios';  // Sử dụng axiosInstance đã cấu hình

// Gửi yêu cầu đăng nhập tới backend
const handleLoginApi = (email, password) => {
  return axios.post('/api/login', { email, password }) // Gửi dữ liệu vào backend
    .then((response) => {
      console.log('Login response:', response.data); // Log kết quả trả về từ server
      return response.data;
    })
    .catch((error) => {
      console.error('Error during login:', error); // Log lỗi nếu có
      throw error;
    });
};

const handleCreatLoginApi = (email,password) =>{
  return axios.post('/api/creatLogin',{email,password})
  .then((reponse)=>{
    console.log("Creat login success : ",reponse.data)
  })
  .catch((error)=>{
    console.log("Cant create login faile : ",error)
  })
}

export { handleLoginApi, handleCreatLoginApi };
