import { FETCH_CONTACTS } from '../types/contacts';

const loading = (state = true, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_CONTACTS:
      return false;
  }

  return state;
};

export default loading;
