import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deletedBook } from '../redux/books/bookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState(0);

  const deleteBook = () => {
    dispatch(deletedBook(book.item_id));
  };

  const numbers = [];

  const storeNumbers = () => {
    let i = 0;
    // eslint-disable-next-line no-plusplus
    for (i; i <= 100; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  storeNumbers();

  useEffect(() => {
    const random = numbers[Math.floor(Math.random() * numbers.length)];
    setPercent(random);
  }, []);

  return (
    <div className="book-card border bg-white p-8 shadow-sm rounded flex items-center justify-between">
      <div>
        <p className="text-gray-400 font-bold">{book.category}</p>
        <h1 className="title text-slate-700 font-extrabold text-2xl">
          {book.title}
        </h1>
        <p className="author text-blue-700 font-light text-lg">{book.author}</p>
        <div className="actions mt-5">
          <button
            type="button"
            className="pr-2 text-blue-700 text-sm hover:text-blue-900"
          >
            Comments
          </button>
          <button
            type="button"
            className="px-2 text-blue-700 border-l-2 border-r-2 text-sm hover:text-blue-900"
            onClick={deleteBook}
          >
            Remove
          </button>
          <button
            type="button"
            className="px-2 text-blue-700 text-sm hover:text-blue-900"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="md:flex gap-16 hidden">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20">
            <CircularProgressbar value={percent} />
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <p className="text-2xl">
              {percent}
              %
            </p>
            <span>completed</span>
          </div>
        </div>

        <div className="border-l-2 pl-10">
          <p className="uppercase font-light text-gray-500">Current Chapter</p>
          <h3>Chapter 3: A Lesson Learned</h3>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded text-sm mt-5 uppercase"
          >
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
