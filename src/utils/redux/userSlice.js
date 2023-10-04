import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    editUserFlag: false,
    editID: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = action.payload;
    },
    editUser: (state, action) => {
      state.users = action.payload;
    },
    editUserFlagAction: (state) => {
      state.editUserFlag = !state.editUserFlag;
    },
    storeEditID: (state, action) => {
      state.editID = action.payload;
    },
  },
});

export default userSlice.reducer;

export const {
  addUser,
  removeUser,
  editUser,
  editUserFlagAction,
  storeEditID,
} = userSlice.actions;
