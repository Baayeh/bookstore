const initState = {
  books: [
    {
      id: '1',
      title: 'House of Dragons',
      author: 'George R. R. Martin',
    },
    {
      id: '2',
      title: 'Merlin',
      author: 'J.J Okocha',
    },
    {
      id: '3',
      title: 'Harry Potter',
      author: 'J.K. Rowling',
    },
    {
      id: '4',
      title: 'Rings of Fire',
      author: 'Astro Yoshi',
    },
  ],
};

// Actions
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

// Action creators
const addBook = (book) => ({
  type: ADDED_BOOK,
  book,
});

const removeBook = (id) => ({
  type: REMOVED_BOOK,
  id,
});

// Reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case REMOVED_BOOK:
      return {
        ...state,
        books: state.books.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export { addBook, removeBook };
export default reducer;
