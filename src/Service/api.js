import axios from 'axios';

// const apiUrl = 'https://crudcrud.com/api/96cd5edc37834045947acee3ae20f703/users';
const apiUrl = 'https://crudcrud.com/api/37208a66a8074a64860a9c6b9989284a/users';


export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${apiUrl}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${apiUrl}/`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${apiUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${apiUrl}/${id}`, user)
}