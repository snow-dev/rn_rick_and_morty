import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {characterSlice} from './characterSlice';
import {characterApi} from '../services/character';

const store = configureStore({
  reducer: {
    characters: characterSlice.reducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  // @ts-ignore-next-line
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({}).concat([characterApi.middleware]);
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
