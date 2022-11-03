import React from 'react';
import Book from '../components/Book';

const Home = () => (
  <section className="p-3 md:px-16 md:py-5">
    <div className="book-list">
      <Book title="House of Dragons" author="George R. R. Martin" />
    </div>
  </section>
);

export default Home;
