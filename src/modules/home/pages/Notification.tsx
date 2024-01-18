import { getAllAlerts } from "../../../shared/services/alertService";
import { useAutomaticLogout } from "../../../hooks/useFetch";
import NotificationCard from "../components/notification-card/NotificationCard";

import "./notification.styles.css";

export function Notification() {
  const { data: alerts } = useAutomaticLogout(["user"], getAllAlerts);

  return (
    <div className="margin-layout --alerts-content">
      <h2>Notificaciones</h2>
      <div className="notifications">
        {alerts?.data.map((alert) => {
          return (
            <NotificationCard
              key={alert.id}
              details={alert.details}
              type={alert.type}
              longitude={1}
              latitude={1}
              id={1}
            />
          );
        })}
      </div>
    </div>
  );
}
