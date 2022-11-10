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
    <section id="form-section" className="mb-10">
      <h3 className="add-book-title">Add New Book</h3>
      <form className="">
        <div className="form-control flex items-center flex-wrap gap-8 md:gap-7">
          <input
            type="text"
            className="add-input-field"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            className="add-input-field"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <select
            name="category"
            id="category"
            className="select-input"
            value={category}
            onChange={selectCategory}
          >
            <option value="Fiction">Fiction</option>
            <option value="Non Fiction">Non Fiction</option>
          </select>

          <div className="form-action">
            {status && (
              <button type="button" className="add-btn hover:bg-[#2b6ea9]" onClick={addABook}>
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
