/**
 * Va a contener la lógica de estado de
 * nuestra aplicación
*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    username: '',
    email: ''
};

export const userSlice = createSlice({
    name: 'user', // para poderla indentificar desde nuestros componentes hijos
    initialState,
    // las diferentes acciones que queremos que modifiquen el estado
    reducers: {
        addUser: (state, action) => {
            const { name, username, email } = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
        changeEmail: (state, action) => {
            state.email = action.payload
        }
    }
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;