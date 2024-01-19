import {createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, getContactsThunk } from "./thunks";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";


const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload.message
}
const handleFulfilled = (state) => {
	state.isLoading = false
}

const contactInitialState = {
    contacts: [],
    isLoading: false,
    error: null,
    
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    extraReducers: builder => {
        builder
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts =payload
            })
             .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.unshift(payload)
            })
             .addCase(deleteContactThunk.fulfilled,  (state, { payload }) => {
                state.contacts = state.contacts.filter(contact => contact.id !== payload.id)
            })
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
            .addMatcher((action)=> action.type.endsWith('/fulfilled'), handleFulfilled)
    }
})

export const getContactValue = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;



const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['token'],

}

export const contactsPersistReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
)
