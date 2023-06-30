import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "JOSESITO",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload === "hola" ? "JUAN" : action.payload;
        },
    },
});

export const { changeName } = userSlice.actions;
export default userSlice.reducer;
