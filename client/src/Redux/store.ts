import { configureStore } from "@reduxjs/toolkit";
import theoriesReducer   from "./thoeries/theories.store";
import userAccountReducer  from './user-account/user-account.store'

const store = configureStore({
  reducer: {
    userAccountReducer,
    theoriesReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;