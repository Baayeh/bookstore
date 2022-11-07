import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const deleteBook = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div className="book-card border bg-white p-3 shadow rounded">
      <small>Category</small>
      <h2 className="title text-blue-900 font-extrabold text-xl">
        {book.title}
      </h2>
      <p className="author">{book.author}</p>
      <button
        type="button"
        className="p-2 text-white mt-3 bg-blue-600 rounded"
        onClick={deleteBook}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
