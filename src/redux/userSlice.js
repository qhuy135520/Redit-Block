import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Le Huy",
    age: 20,
    about: "I'm a software engineer",
    avaUrl: "",
    themeColor: "#ff9051",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
