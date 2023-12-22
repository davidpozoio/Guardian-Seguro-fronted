import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { AppState } from "../../redux/store";

export function ButtonEmergency() {
  const alert = useSelector((state: AppState) => state.alert);

  return (
    <>{alert.isSending ? <p>tu alerta está siendo enviada</p> : <Outlet />}</>
  );
}
