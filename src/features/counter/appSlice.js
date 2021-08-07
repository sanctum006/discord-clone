import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: "ul0z90Y4RCF8XVvaSFb4",
    channelName: "chill-talks",
  },
  reducers: {
    setChannelInfo: (state, action) => {
      console.log("Hello");
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
