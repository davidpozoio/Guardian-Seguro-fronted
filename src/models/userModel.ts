import { Roles } from "../consts/roles";

export interface AuthenticatedUser {
  fullName: string;
  email: string;
  role: Roles;
  longitude: number;
  latitude: number;
}
