import { useEffect, useState } from "react";
import { getAllAlerts } from "../../../shared/services/alertService";
import { AlertGetDto } from "../../../models/alertModel";

export function Notification() {
  const [alerts, setAlerts] = useState<AlertGetDto[]>([]);

  useEffect(() => {
    getAllAlerts().then((res) => {
      setAlerts(res.data);
    });
  }, []);
  return (
    <>
      <h1>notification</h1>
      <div>
        {alerts.map((alert) => {
          return (
            <button key={alert.id}>
              <div>{alert.type}</div>
              <div>{alert.details}</div>
            </button>
          );
        })}
      </div>
    </>
  );
}
