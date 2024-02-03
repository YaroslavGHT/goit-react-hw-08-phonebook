import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as contactsApi from '../../services/api.js';

export const apiGetContacts = createAsyncThunk(
  'contacts/apiGetContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiAddContact = createAsyncThunk(
  'contacts/apiAddContact',
  async (contact, thunkApi) => {
    try {
      const newContact = await contactsApi.addContact(contact);
      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteContact = createAsyncThunk(
  'contacts/apiDeleteContact',
  async (id, thunkApi) => {
    try {
      const contacts = await contactsApi.deleteContact(id);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(apiGetContacts.pending, (state, _) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(apiGetContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(apiAddContact.pending, (state, _) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(apiAddContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(apiDeleteContact.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(contactEl => {
          return contactEl.id !== action.payload.id;
        });
      })
      .addCase(apiDeleteContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;