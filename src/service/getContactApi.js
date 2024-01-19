import axios from 'axios';

const contactsInstance = axios.create({
    baseURL:'https://connections-api.herokuapp.com'
})
 
export const fetchContacts = async () => {
    const { data } = await contactsInstance.get('/contacts');
    console.log(data)
    return data
}

export const addContacts = async (newContact) => {
    const { data } = await contactsInstance.post('/contacts', newContact);
    return data
}

export const deleteContacts = async (contactId) => {
    const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
    return data
}