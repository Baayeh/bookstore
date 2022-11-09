import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { fetchBooks, clearMessages } from '../redux/books/bookSlice';

const Home = () => {
  const entity = useSelector((state) => state.book);
  const [hideMessage, setHideMessage] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (entity.books) {
      setHideMessage(true);

      setTimeout(() => {
        setHideMessage(false);
        dispatch(clearMessages());
      }, 2000);
    }
  }, [entity.books, dispatch]);

  useEffect(() => {
    if (entity.error) {
      setHideMessage(true);

      setTimeout(() => {
        setHideMessage(false);
        dispatch(clearMessages());
      }, 2000);
    }
  }, [entity.error, dispatch]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <section className="p-3 md:px-16 md:py-5">
      <div className="book-list flex flex-col gap-y-5">
        {entity.loading && <div className="text-3xl my-10">Loading...</div>}
        {entity.msg && hideMessage && (
          <div className="text-3xl my-10">{entity.msg}</div>
        )}
        {!entity.loading && entity.error && hideMessage ? (
          <div>
            Error:
            {' '}
            {entity.error}
          </div>
        ) : null}
        {!entity.loading && !entity.books.length ? (
          <div className="text-3xl my-10">Ooops! No books available</div>
        ) : null}
        {!entity.loading && entity.books.length
          ? entity.books.map((book) => <Book key={book.item_id} book={book} />)
          : null}
      </div>
      <AddBook />
    </section>
  );
};

export default Home;
