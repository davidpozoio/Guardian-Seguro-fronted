import { AlertGetDto } from "../../../../models/alertModel";
import "./notificationCard.styles.css";

interface NotificationCardProps {
  alert: AlertGetDto;
  handleClick: () => void;
}

const NotificationCard = ({ alert, handleClick }: NotificationCardProps) => {
  return (
    <div className="card-notification" onClick={handleClick}>
      <h3>Tipo de alerta:</h3>
      <span>{alert.type}</span>

      <h3>Detalles</h3>
      <span>{alert.details}</span>
    </div>
  );
};
export default NotificationCard;
