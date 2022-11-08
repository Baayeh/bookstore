/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBooks, addABook, deleteBook } from '../services';

const initialState = {
  loading: false,
  books: [],
  error: '',
  msg: '',
};

// Actions
const FETCHED_BOOKS = 'bookstore/books/fetchBooks';
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

const formatBooks = (response) => {
  let booksArr = [];
  if (Object.keys(response).length) {
    booksArr = Object.keys(response).map((key) => ({
      item_id: key,
      title: response[key][0].title,
      author: response[key][0].author,
      category: response[key][0].category,
    }));

    return booksArr;
  }

  return booksArr;
};

export const fetchBooks = createAsyncThunk(FETCHED_BOOKS, async () => {
  const res = await getAllBooks();
  return formatBooks(res.data);
});

export const addBook = createAsyncThunk(ADDED_BOOK, async (book) => {
  const res = await addABook(book);
  return {
    message: res.data,
    payload: book,
  };
});

export const deletedBook = createAsyncThunk(REMOVED_BOOK, async (id) => {
  const res = await deleteBook(id);
  return {
    message: res.data,
    payload: id,
  };
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    clearMessages: (state) => {
      state.msg = '';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      state.msg = action.payload.message;
      state.books = [action.payload.payload, ...state.books];
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(deletedBook.fulfilled, (state, action) => {
      state.msg = action.payload.message;
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload.payload,
      );
    });
    builder.addCase(deletedBook.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { clearMessages } = bookSlice.actions;

export default bookSlice.reducer;
