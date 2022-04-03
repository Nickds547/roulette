import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITheory } from './theories.model'

interface ITheoryState {
  theories: ITheory[];
  loading: boolean
}

const initialState: ITheoryState ={
    theories: [],
    loading: false
}

export const theoriesReducer = createSlice({
  name: 'thoeries',
  initialState,
  reducers: {
    updateTheories: (state, action: PayloadAction<ITheory[]>) =>{
      var theories = action.payload;
      state.theories = theories;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
})

export const { updateLoading, updateTheories} = theoriesReducer.actions

export default theoriesReducer.reducer