import { config } from "../../../environment/config";
import axios from "../../../interceptors/globalInterceptor";
import { AuthenticatedUser } from "../models/userModel";

export function login(email: string, password: string) {
  return axios.post(`${config.AUTHPATH}/login`, {
    email,
    password,
  }) as Promise<{ data: AuthenticatedUser }>;
}

export function signup() {}

export function isAuth() {
  return axios.get(`${config.AUTHPATH}/check-auth`) as Promise<{
    data: AuthenticatedUser;
  }>;
}
