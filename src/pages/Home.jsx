import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

const Home = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <section className="p-3 md:px-16 md:py-5">
      <div className="book-list flex flex-col gap-y-5">
        {books?.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <AddBook />
    </section>
  );
};

export default Home;
