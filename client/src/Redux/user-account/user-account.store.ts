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
    login: (state, action: PayloadAction<ILogin>) => {
      //TODO: add api
      // var newUser: IUser = {
      //   role:  'admin',
      //   token: 'valid',
      //   username:  action.payload.username
      // }
      
      rouletteApi.login(action.payload.username, action.payload.password)
      .then((data) =>{
        console.log(data);
      })
      .catch((error) =>{

      })

      // state.account = {...newUser};
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