import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = '9hAMqLmrpu0Gssg6JV9K';

const getAllBooks = async () => {
  const response = await axios.get(`${BASE_URL}/apps/${APP_ID}/books`);
  return response;
};

const addABook = async (book) => {
  const response = await axios.post(`${BASE_URL}/apps/${APP_ID}/books`, book);
  return response;
};

const deleteBook = async (id) => {
  const response = await axios.delete(`${BASE_URL}/apps/${APP_ID}/books/${id}`);
  return response;
};

export { getAllBooks, addABook, deleteBook };
