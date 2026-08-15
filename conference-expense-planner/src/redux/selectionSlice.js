import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: {},
  addons: {},
  meals: {}
};

const selectionsSlice = createSlice({
  name: "selections",

  initialState,

  reducers: {
    incrementRoom: (state, action) => {
      const name = action.payload;
      state.rooms[name] = (state.rooms[name] || 0) + 1;
    },

    decrementRoom: (state, action) => {
      const name = action.payload;

      if (state.rooms[name] > 0) {
        state.rooms[name] -= 1;
      }
    },

    incrementAddon: (state, action) => {
      const name = action.payload;
      state.addons[name] = (state.addons[name] || 0) + 1;
    },

    decrementAddon: (state, action) => {
      const name = action.payload;

      if (state.addons[name] > 0) {
        state.addons[name] -= 1;
      }
    },

    setMealQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      state.meals[name] = Number(quantity);
    }
  }
});

export const {
  incrementRoom,
  decrementRoom,
  incrementAddon,
  decrementAddon,
  setMealQuantity
} = selectionsSlice.actions;

export default selectionsSlice.reducer;