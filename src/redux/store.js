/**
 * Este contiene el estado de la aplicación
 * y su función reducer
*/
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        user: useReducer, // slices o porciones (son mini estados que componen el estado global)
    }
})