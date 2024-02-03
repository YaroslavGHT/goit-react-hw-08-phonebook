import { createSelector } from '@reduxjs/toolkit';
import { selectContactsList } from '../../redux/contactSlice/contact.selectors.js';

export const selectFilter = state => state.filter.filter;

export const selectContactsFilter = createSelector(
  [selectContactsList, selectFilter],
  (contacts, filter) => {
    return contacts?.filter(contactEl =>
      contactEl.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);