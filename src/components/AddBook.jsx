import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ProgressSpinner } from 'primereact/progressspinner';
import { addBook } from '../redux/books/bookSlice';

const AddBook = ({ entity, toast }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');
  const [status, setStatus] = useState(true);
  const dispatch = useDispatch();

  const selectCategory = (e) => {
    setCategory(e.target.value);
  };

  const addABook = () => {
    if (title === '' || author === '') {
      toast.fire({
        icon: 'error',
        title: 'All fields are required to add a book',
      });
    }

    if (title !== '' && author !== '') {
      setStatus(false);
      const book = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  useEffect(() => {
    if (entity.msg) {
      setStatus(true);
    }
  }, [entity.msg]);

  return (
    <section id="form-section" className="mt-10 border-t-2 pt-5">
      <h3 className="text-2xl font-bold">Add New Book</h3>
      <form className="">
        <div className="form-control grid md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5">
          <input
            type="text"
            className="p-3 md:p-2 border focus:outline-none col-span-1"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            className="p-3 md:p-2 border focus:outline-none"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <select
            name="category"
            id="category"
            className="p-3 md:p-2 border focus:outline-none"
            value={category}
            onChange={selectCategory}
          >
            <option value="Fiction">Fiction</option>
            <option value="Non Fiction">Non Fiction</option>
          </select>

          <div className="form-action">
            {status && (
              <button
                type="button"
                className="uppercase bg-blue-600 text-white p-2 rounded md:w-[9rem]"
                onClick={addABook}
              >
                Add Book
              </button>
            )}
            {!status && (
              <button
                type="button"
                className="uppercase bg-blue-600 text-white p-2 rounded md:w-[9rem] flex justify-center gap-2 items-center"
              >
                <span>
                  <ProgressSpinner className="w-5 h-5" strokeWidth={5} />
                </span>
                Adding...
              </button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

AddBook.propTypes = {
  entity: PropTypes.shape().isRequired,
  toast: PropTypes.func.isRequired,
};
export default AddBook;
