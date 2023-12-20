import { config } from "../../../environment/config";
import axios from "../../../interceptors/globalInterceptor";
import { AlertData } from "../models/AlertModel";

export function getAllAlerts() {
  return axios.get(`${config.API}/users`) as Promise<{ data: AlertData[] }>;
}
