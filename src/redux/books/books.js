const initState = {
  books: [],
};

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

// Action creators
const addBook = (book) => ({
  type: ADD,
  book,
});

const removeBook = (id) => ({
  type: REMOVE,
  id,
});

// Reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case REMOVE:
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
