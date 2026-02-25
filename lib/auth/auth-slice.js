import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
    user: { name: null, email: null, gender: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(authOperations.register.fulfilled, (state, action) => {
            console.log(action);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
            .addCase(authOperations.login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperations.logOut.fulfilled, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(authOperations.getCurrentUser.pending, (state) => {
                state.isFetchingCurrentUser = true;
            })
            .addCase(authOperations.getCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isFetchingCurrentUser = false;
            })
            .addCase(authOperations.getCurrentUser.rejected, (state) => {
                state.isFetchingCurrentUser = false;
            })
    }
});

export default authSlice.reducer;