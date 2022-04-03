import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from './user-account.model'

interface IUserAccountState {
  account: IUser;
  loading: boolean
}

const initialState: IUserAccountState ={
  account: {
    username: "",
    role: localStorage.getItem('role') || '',
    token: localStorage.getItem('token') || ''
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

      if(token) localStorage.setItem('token', token);
      if(role) localStorage.setItem('role', role);

      var userAccount: IUser = {username, token, role};
      state.account = userAccount;

    },
    setLoading: (state, action: PayloadAction<boolean>) =>{
      state.loading = action.payload;
    }
  },
})

export const { logout, setUserAccount,setLoading } = userAccount.actions

export default userAccount.reducer