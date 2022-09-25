import { createSlice } from "@reduxjs/toolkit";

const hobbySlice = createSlice({
  name: "hobbylist",
  initialState: {
    list: [],
    activeId: "",
  },
  reducers: {
    addHobby: (state, action) => {
      state.list.push(action.payload);
    },
    removeHobby: (state, action) => {
      const index = state.list.findIndex(
        (hobby) => hobby.id === action.payload.id
      );
      state.list.splice(index, 1);
    },
    setActiveId: (state, action) => {
      state.activeId = action.payload;
    },
  },
});

const { actions, reducer } = hobbySlice;
const { addHobby, removeHobby, setActiveId } = actions;
export { addHobby, removeHobby, setActiveId };
export default reducer;
