import { createSelector } from 'reselect';

const allContacts = state => state.contacts;

export const eventNoContactIds = createSelector(allContacts, contacts =>
  contacts?.contactsIds?.filter(id => id % 2 === 0)
);

export const contactsSelector = createSelector(allContacts, state => state.contacts);

export const nextPageSelector = createSelector(allContacts, state => state.nextPage);

export const contactsIdsSelector = createSelector(allContacts, state => state.contactsIds);
