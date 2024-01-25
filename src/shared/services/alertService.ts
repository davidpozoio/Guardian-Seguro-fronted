import { config } from "../../environment/config";
import axios from "../../interceptors/globalInterceptor";
import { AlertGetDto, AlertPostDto } from "../../models/alertModel";
export function getAllAlerts() {
  return axios.get(`${config.API}/alerts`) as Promise<{ data: AlertGetDto[] }>;
}

export function saveAlert(alert: AlertPostDto) {
  return axios.post(`${config.API}/alerts`, alert) as Promise<{
    data: AlertGetDto[];
  }>;
}

