import { AlertType } from "../models/alertModel";

export const alertTypes: AlertType[] = [
  {
    name: "Incendio",
    url: "/src/assets/icons/alerts/fire.png",
    description: "Hay un incendio",
  },
  {
    name: "Acoso",
    url: "/src/assets/icons/alerts/harassment.png",
    description: "Acoso",
  },
  {
    name: "Robo",
    url: "/src/assets/icons/alerts/heist.png",
    description: "Un robo",
  },
];
