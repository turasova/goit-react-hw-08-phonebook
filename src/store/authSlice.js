import { signUpThunk } from "./thunks"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    isLoading: false,
    error: '',
    token: '',
    profile: null,
}

const handleRegistration = (state,{payload}) => {
    state.token = payload.token
    state.profile = payload.user
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUpThunk.fulfilled, handleRegistration)
            .addCase(signUpThunk.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
			})
			.addCase(signUpThunk.pending, (state) => {
				state.isLoading = false
				state.error = ''
			})
    }
})

export const authReducer = authSlice.reducer