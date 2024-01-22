import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";

export function UserDetails() {
  const user = useSelector((state: AppState) => state.user);

  return (
    <div className="margin-layout --alerts-content">
      <h2>Nombre: {user.fullName}</h2>
      <p>Email: {user.email}</p>
      <p>Rol: {user.role}</p>
    </div>
  );
}
