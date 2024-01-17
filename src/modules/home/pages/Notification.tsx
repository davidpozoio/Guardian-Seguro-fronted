import { getAllAlerts } from "../../../shared/services/alertService";
import { useAutomaticLogout } from "../../../hooks/useFetch";

export function Notification() {
  const { data: alerts } = useAutomaticLogout(["user"], getAllAlerts);

  return (
    <>
      <h1>notification</h1>
      <div>
        {alerts?.data.map((alert) => {
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
