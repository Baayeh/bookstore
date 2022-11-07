const initState = {
  categories: [],
};

// Actions
const STATUS = 'bookstore/categories/STATUS';

// Action creators
const checkStatus = () => ({
  type: STATUS,
  payload: 'Under construction',
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case STATUS:
      return action.payload;
    default:
      return state;
  }
};

export { checkStatus };

export default reducer;
