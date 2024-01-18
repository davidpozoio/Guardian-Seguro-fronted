import { AlertGetDto } from "../../../../models/alertModel";
import "./notificationCard.styles.css";

const NotificationCard = ({ details, type }: AlertGetDto) => {
  return (
    <div className="card-notification">
      <h3>Tipo de alerta:</h3>
      <span>{type}</span>

      <h3>Detalles</h3>
      <span>{details}</span>
    </div>
  );
};
export default NotificationCard;
