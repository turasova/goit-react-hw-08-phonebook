import axios from "axios";

const AuthInstance = axios.create({
    baseURL:'https://connections-api.herokuapp.com'
})

export const registrationUser = async (body) => {
    const { data } = await AuthInstance.post('/users/signup', body);
    console.log(data)
    return data
}

export const loginUser = async (body) => {
    const { data } = await AuthInstance.post('/users/login', body);
    console.log(data)
    return data
}

export const logoutUser = async () => {
    const { data } = await AuthInstance.post('/users/logout');
    console.log(data)
    return data
}
