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
        <p className="category-name">{book.category}</p>
        <h1 className="title">{book.title}</h1>
        <p className="author">{book.author}</p>
        <div className="actions mt-5">
          <button type="button" className="book-btn">
            Comments
          </button>
          <button
            type="button"
            className="book-btn px-3 border-l-2 border-r-2"
            onClick={deleteBook}
          >
            Remove
          </button>
          <button
            type="button"
            className="book-btn"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="md:flex gap-24 hidden pr-[7rem]">
        <div className="flex items-center gap-4">
          <div className="w-[4.25rem] h-[4.25rem]">
            <CircularProgressbar value={percent} />
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <p className="text-[2rem] text-[#121212]">
              {percent}
              %
            </p>
            <span className="text-[0.875rem] text-[#121212] opacity-[0.5]">completed</span>
          </div>
        </div>

        <div className="border-l-2 border-[#e8e8e8] pl-20">
          <p className="uppercase text-[0.813rem] text-[#121212] opacity-[0.5] font-[300]">Current Chapter</p>
          <h3 className="text-[1rem] tracking-[-0.4px] text-[#121212] mt-[0.438rem]">Chapter 3: A Lesson Learned</h3>
          <button
            type="button"
            className="px-4 py-2 bg-[#0290ff] text-white rounded-[3px] text-[0.813rem] font-[300] tracking-[0.5px] mt-[0.95rem] w-[11.5rem] uppercase hover:bg-[#2b6ea9]"
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
