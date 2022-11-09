/* eslint-disable react/self-closing-comp */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { fetchBooks, clearMessages } from '../redux/books/bookSlice';

const Home = () => {
  const entity = useSelector((state) => state.book);
  const [hideMessage, setHideMessage] = useState(false);
  const dispatch = useDispatch();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  if (entity.msg && hideMessage) {
    Toast.fire({
      icon: 'success',
      title: entity.msg,
    });
  }

  if (!entity.loading && entity.error && hideMessage) {
    Toast.fire({
      icon: 'error',
      title: entity.error,
    });
  }

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
  }, [dispatch]);

  return (
    <section className="p-3 md:px-16 md:py-5">
      <div className="book-list flex flex-col gap-y-5">
        {entity.loading && <div className="text-3xl my-10">Loading...</div>}
        {!entity.loading && !entity.books.length ? (
          <div className="text-2xl font-bold my-10 text-center">
            Ooops! No books available
          </div>
        ) : null}
        {!entity.loading && entity.books.length
          ? entity.books.map((book) => <Book key={book.item_id} book={book} />)
          : null}
      </div>
      <div className="divider"></div>
      <AddBook toast={Toast} entity={entity} />
    </section>
  );
};

export default Home;
