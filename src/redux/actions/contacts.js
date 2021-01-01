import api from '../../services/api';
import { contactsState } from '../state/contacts';
import { FETCH_CONTACTS, FETCH_NEXT_PAGE, CLEAR_CONTACTS } from '../types/contacts';

export const fetchContacts = (companyId, pageNo = 1, countryId = null, query = null) => {
  let apiUrl = `/contacts.json?companyId=${companyId}&page=${pageNo}`;
  if (countryId) {
    apiUrl = `${apiUrl}&countryId=${countryId}`;
  }

  if (query) {
    apiUrl = `${apiUrl}&query=${query}`;
  }

  return dispatch =>
    api.get(apiUrl).then(contacts => {
      if (!contacts.data.contacts_ids.length) {
        return dispatch(clearContacts());
      }

      return dispatch({
        type: pageNo !== 1 ? FETCH_NEXT_PAGE : FETCH_CONTACTS,
        contacts: contacts.data,
        nextPage: pageNo,
      });
    });
};

export const clearContacts = () => {
  return {
    type: CLEAR_CONTACTS,
    ...contactsState,
  };
};
