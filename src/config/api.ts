import axios from './axios';

export default {
  signIn: (data: object | [object]) => axios.post('/auth/login', data),
};
