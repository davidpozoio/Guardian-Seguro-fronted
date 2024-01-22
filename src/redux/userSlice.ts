import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Roles } from "../consts/roles";
import { AuthenticatedUser } from "../models/userModel";

interface AuthPayload {
  isAuth: boolean;
}

interface RolePayload {
  role: Roles;
}

interface UserDetails extends AuthenticatedUser {}

interface UserPayload extends AuthPayload, RolePayload, UserDetails {}

const initialState: UserPayload = {
  isAuth: false,
  role: Roles.ADMIN,
  email: "",
  fullName: "",
  latitude: 0,
  longitude: 0,
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
    setUserDetails: (state, action: PayloadAction<UserDetails>) => {
      const { email, fullName, latitude, longitude, role } = action.payload;
      state.role = role;
      state.email = email;
      state.fullName = fullName;
      state.latitude = latitude;
      state.longitude = longitude;
    },
  },
});

export const { setAuth, setRole, setUserDetails } = userSlice.actions;
export default userSlice.reducer;
