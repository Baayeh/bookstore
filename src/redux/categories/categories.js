const initState = {
  categories: [],
};

// Actions
const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS';

// Action creators
const checkStatus = () => ({
  type: CHECKED_STATUS,
  payload: 'Under construction',
});

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export { checkStatus };

export default reducer;
