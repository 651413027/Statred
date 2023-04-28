import { UserData, UserState } from '@/models/user.model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { create } from 'domain'



const initialState: UserState = {
  user: undefined,
  accessToken: '',
  isAuthenticated: false,
  isAuthenticating: true,
}

interface SetUser {
  user: UserData
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SetUser>) => {
      state.user = action.payload.user
    },
  },
})

const signin = create 

export const { setUser } = authSlice.actions

export default authSlice.reducer


const