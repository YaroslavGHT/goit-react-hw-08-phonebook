import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts;

export const selectContactsList = createSelector(
  selectContacts,
  contacts => contacts.contacts.items
);

export const selectStatus = createSelector(
  selectContacts,
  contacts => contacts.contacts.isLoading
);

export const selectError = createSelector(
  selectContacts,
  contacts => contacts.contsacts.error
);