import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILogin, IUser } from './user-account.model'

interface IUserAccountState {
  account: IUser;
}

const initialState: IUserAccountState ={
  account: {
    username: "",
    role: "",
    token: ""
  }
}

export const userAccount = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILogin>) => {
      //TODO: add api
      console.log('logging in store: ', action)
      var newUser: IUser = {
        role:  'admin',
        token: 'valid',
        username:  action.payload.username
      }
      state.account = {...newUser};
    },
    logout: (state) => {
      state.account = { username: "",
      role: "",
      token: ""};
    }
  },
})

export const { login, logout } = userAccount.actions

export default userAccount.reducer