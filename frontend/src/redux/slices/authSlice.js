import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        token:undefined
    },
    reducers: {
        signupSuccess: (state, action) => {
            state.user = action.payload
        },
        loginSuccess: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
        logoutSuccess: (state, action) => {
            state.user = null,
                state.isAuthenticated = false
        },
        setToken: (state, action) => {
            console.log("hey",action)
            state.token = action.payload
            console.log(state.token)
        }
    },
})

export const {
    signupSuccess, loginSuccess, logoutSuccess,setToken
} = authSlice.actions

export default authSlice.reducer
