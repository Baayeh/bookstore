import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const AddBook = () => {
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <section id="form-section" className="mt-5">
      <h3>Add New Book</h3>
      <form className="flex flex-col md:flex-row gap-5">
        <div className="form-control flex gap-5">
          <input
            type="text"
            className="p-2 border focus:outline-none w-[12.5rem] md:w-[27rem] lg:w-[35rem]"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="p-2 border focus:outline-none w-[12.5rem] md:w-[27rem] lg:w-[35rem]"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-action">
          <button
            type="button"
            className="uppercase bg-blue-600 text-white p-2 rounded md:w-[9rem]"
            onClick={AddBook}
          >
            Add Book
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddBook;
