import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IsSendingPayload {
  isSending: boolean;
}

const initialState = {
  isSending: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setSending: (state, action: PayloadAction<IsSendingPayload>) => {
      const { isSending } = action.payload;
      state.isSending = isSending;
    },
  },
});

export const { setSending } = alertSlice.actions;
export default alertSlice.reducer;
