import { config } from "../../../environment/config";
import axios from "../../../interceptors/globalInterceptor";
import { AuthenticatedUser } from "../../../models/userModel";
import { RegisterUserDto } from "../models/RegisterUserDto";

export function login(email: string, password: string) {
  return axios.post(`${config.AUTHPATH}/login`, {
    email,
    password,
  }) as Promise<{ data: AuthenticatedUser }>;
}

export function signup(user: RegisterUserDto) {
  return axios.post(
    `${config.AUTHPATH}/signup`,
    user
  ) as Promise<AuthenticatedUser>;
}

export function isAuth() {
  return axios.get(`${config.AUTHPATH}/me`) as Promise<{
    data: AuthenticatedUser;
  }>;
}

export function logout() {
  return axios.get(`${config.AUTHPATH}/logout`) as Promise<unknown>;
}
