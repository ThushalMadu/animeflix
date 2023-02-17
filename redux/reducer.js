import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }

  export const appSlice = createSlice({
    name: 'appReducer',
    initialState,
    reducers: {
      setValue: (state, action) => {
        state.value = action.payload
    },
    },
  })

export const { setValue } = appSlice.actions

export default appSlice.reducer