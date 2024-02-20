import { AlertType } from "../models/alertModel";

export const alertTypes: AlertType[] = [
  {
    name: "Incendio",
    url: "/alerts/fire.png",
    description: "Hay un incendio",
  },
  {
    name: "Acoso",
    url: "/alerts/harassment.png",
    description: "Acoso",
  },
  {
    name: "Robo",
    url: "/alerts/heist.png",
    description: "Un robo",
  },
];
