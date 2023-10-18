import { createSlice } from '@reduxjs/toolkit';

export const favsSlice = createSlice({
    name: 'favs',
    initialState: {
        favs: [],
    },
    reducers: {
        addFav: (favs, action) => {
            if (!favs.includes(action.payload)) {
                favs.push(action.payload);
            }
        },
        removeFav: (favs, action) => {
            favs = favs.filter(fav => fav != action.payload);
        },
    },
});

export const { addFav, removeFav } = favsSlice.actions;

export default favsSlice.reducer;
