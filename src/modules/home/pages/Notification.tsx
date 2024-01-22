import { getAllAlerts } from "../../../shared/services/alertService";
import { useAutomaticLogout } from "../../../hooks/useFetch";
import NotificationCard from "../components/notification-card/NotificationCard";

import "./notification.styles.css";
import NotificationsLoadingSkeleton from "../components/NotificationsLoadingSkeleton";
import Map from "../components/map/Map";
import { useState } from "react";

export function Notification() {
  const { data: alerts, isLoading } = useAutomaticLogout(
    ["user"],
    getAllAlerts
  );

  const [showMap, setShowMap] = useState(false);
  const [alert, setAlert] = useState<{ latitude: number; longitude: number }>({
    latitude: 0,
    longitude: 0,
  });

  return (
    <div className="margin-layout --alerts-content">
      <h2>Notificaciones</h2>
      <div className="notifications">
        {isLoading && <NotificationsLoadingSkeleton numOfCards={3} />}
        {alerts?.data.map((alert) => (
          <NotificationCard
            key={alert.id}
            alert={alert}
            handleClick={() => {
              console.log(alert);
              setShowMap(true);
              setAlert(alert);
            }}
          />
        ))}
      </div>

      <>
        {showMap && (
          <Map
            onClose={() => {
              setShowMap(false);
            }}
            latitude={alert.latitude}
            longitude={alert.longitude}
          />
        )}
      </>
    </div>
  );
}
