import { contactsState } from '../state/contacts';
import { FETCH_CONTACTS, FETCH_NEXT_PAGE, CLEAR_CONTACTS } from '../types/contacts';

export default function contactsReducer(state = contactsState, action) {
  switch (action.type) {
    case CLEAR_CONTACTS:
      return {
        ...action.state,
      };
    case FETCH_CONTACTS:
      return {
        ...state,
        total: action.contacts.total,
        contactsIds: action.contacts.contacts_ids,
        contacts: { ...action.contacts.contacts },
        nextPage: action.nextPage,
      };
    case FETCH_NEXT_PAGE:
      let contactsIds = action.contacts.contacts_ids;
      return {
        ...state,
        total: action.contacts.total + state.total,
        contactsIds: [...state.contactsIds, ...contactsIds],
        contacts: { ...state.contacts, ...action.contacts.contacts },
        nextPage: action.nextPage,
      };
    default:
      return state;
  }
}
