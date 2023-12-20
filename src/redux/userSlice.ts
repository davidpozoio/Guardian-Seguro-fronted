import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Roles } from "../consts/roles";

interface AuthPayload {
  isAuth: boolean;
}

interface RolePayload {
  role: Roles;
}

interface UserPayload extends AuthPayload, RolePayload {}

const initialState: UserPayload = {
  isAuth: false,
  role: Roles.USER,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthPayload>) => {
      const { isAuth } = action.payload;
      state.isAuth = isAuth;
    },
    setRole: (state, action: PayloadAction<RolePayload>) => {
      const { role } = action.payload;
      state.role = role;
    },
  },
});

export const { setAuth, setRole } = userSlice.actions;
export default userSlice.reducer;
