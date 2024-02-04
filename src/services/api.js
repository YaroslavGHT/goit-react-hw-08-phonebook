import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'https://65b6a3aada3a3c16ab0104ad.mockapi.io/contacts',
});

export async function fetchContacts() {
  const { data } = await contactsApi.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await contactsApi.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await contactsApi.delete(`/contacts/${id}`);
  return data;
}

