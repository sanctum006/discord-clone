import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const emojiSlice = createSlice({
  name: "emoji",
  initialState: {
    emoji: "",
  },
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
