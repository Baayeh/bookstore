import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book-card border bg-white p-3 shadow rounded">
    <small>Category</small>
    <h2 className="title text-blue-900 font-extrabold text-xl">{title}</h2>
    <p className="author">{author}</p>
    <button type="button" className="p-2 text-white mt-3 bg-blue-600 rounded">
      Remove
    </button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
