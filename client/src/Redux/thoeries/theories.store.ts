import { createSlice } from '@reduxjs/toolkit'
import { ITheory } from './theories.model'

interface ITheoryState {
  theories: ITheory[];
}

const initialState: ITheoryState ={
    theories: []
}

export const theoriesReducer = createSlice({
  name: 'thoeries',
  initialState,
  reducers: {
  },
})

export const { } = theoriesReducer.actions

export default theoriesReducer.reducer