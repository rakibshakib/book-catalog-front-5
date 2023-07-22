import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IauthInterface {
  accessToken: string | undefined;
  user: {
    userName: string;
    email: string;
  };
}

const initialState: IauthInterface = {
  accessToken: "",
  user: {
    userName: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<IauthInterface>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = {
        userName: "",
        email: "",
      };
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
