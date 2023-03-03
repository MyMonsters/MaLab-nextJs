import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { MaLabApi } from './MaLabApi';

export const makeStore = () =>
  configureStore({
    reducer: {
      [MaLabApi.reducerPath]: MaLabApi.reducer,
    },
    middleware: (gDM) => gDM().concat(MaLabApi.middleware),
  });

export const wrapper = createWrapper(makeStore, { debug: true });
