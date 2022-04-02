import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILogin, IUser } from './user-account.model'
import * as rouletteApi from '../../api/roulette.api';

interface IUserAccountState {
  account: IUser;
  loading: boolean
}

const initialState: IUserAccountState ={
  account: {
    username: "",
    role: "",
    token: ""
  },
  loading: false
}

export const userAccount = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    logout: (state) => {
      state.account = { username: "",
      role: "",
      token: ""};
    },
    setUserAccount: (state, action: PayloadAction<IUser>) =>{
      const {username, token, role} = action.payload;

      console.log('action payload: ', action.payload)
      var userAccount: IUser = {username, token, role};
      console.log('userAccount: ', userAccount)
      state.account = userAccount;

    },
    setLoading: (state, action: PayloadAction<boolean>) =>{
      state.loading = action.payload;
    }
  },
})

export const { logout, setUserAccount,setLoading } = userAccount.actions

export default userAccount.reducer