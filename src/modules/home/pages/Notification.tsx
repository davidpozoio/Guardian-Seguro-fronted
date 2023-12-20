import { useEffect, useState } from "react";
import { getAllAlerts } from "../services/AlertService";
import { AlertData } from "../models/AlertModel";

export function Notification() {
  const [alerts, setAlerts] = useState<AlertData[]>([]);

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
            <div key={alert.id}>
              <div>{alert.id}</div>
              <div>{alert.type}</div>
              <div>{alert.details}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
