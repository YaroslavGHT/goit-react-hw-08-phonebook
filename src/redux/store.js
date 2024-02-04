import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactSlice/contactSlice.js';
import { filterReducer } from '../redux/filterSlice/filterSlice.js';

// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare({
      serializableCheck: {
        // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);