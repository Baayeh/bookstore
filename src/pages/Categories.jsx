// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { checkStatus } from '../redux/categories/categories';

const Categories = () => (
  // const [status, setStatus] = useState('');
  // const dispatch = useDispatch();

  // const statusCheck = () => {
  //   const value = dispatch(checkStatus()).payload;
  //   setStatus(value);
  // };

  <div className="p-3 md:px-16 md:py-5">
    <button
      type="button"
      className="bg-slate-400  p-2 uppercase text-sm rounded"
    >
      Check status
    </button>
    {/* <p className="text-4xl font-bold mt-10 text-red-600">{status}</p> */}
  </div>
);
export default Categories;
