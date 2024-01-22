import axios from "axios";

const AuthInstance = axios.create({
    baseURL:'https://connections-api.herokuapp.com'
})

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registrationUser = async (newUser) => {
    const { data } = await AuthInstance.post('/users/signup', newUser);
    token.set(data.token)
    console.log(data)
    return data
}

export const loginUser = async (authLoginUser) => {
    const { data } = await AuthInstance.post('/users/login', authLoginUser);
    token.set(data.token)
    console.log(data)
    return data
}

export const logoutUser = async () => {
    const { data } = await AuthInstance.post('/users/logout');
    token.unset();
    console.log(data)
    return data
}

export const currentUser = async () => {
   
    const { data } = await AuthInstance.get('/users/current');
    token.set(data.token);
    console.log(data)
    return data
}
