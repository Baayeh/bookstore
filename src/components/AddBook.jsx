import React from 'react';

const AddBook = () => (
  <section id="form-section" className="mt-5">
    <h3>Add New Book</h3>
    <form className="flex flex-col md:flex-row gap-5">
      <div className="form-control flex gap-5">
        <input
          type="text"
          className="p-2 border focus:outline-none w-[12.5rem] md:w-[27rem] lg:w-[35rem]"
          placeholder="Book title"
        />
        <select
          name="category"
          id="category"
          className="p-[0.6rem] focus:outline-none md:w-[18rem]"
        >
          <option value="Category">George</option>
        </select>
      </div>
      <div className="form-action">
        <button
          type="button"
          className="uppercase bg-blue-600 text-white p-2 rounded md:w-[9rem]"
        >
          Add Book
        </button>
      </div>
    </form>
  </section>
);

export default AddBook;
