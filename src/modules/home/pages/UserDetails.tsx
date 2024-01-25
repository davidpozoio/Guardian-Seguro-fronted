import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import useLogout from "../../../hooks/useLogout";

export function UserDetails() {
  const user = useSelector((state: AppState) => state.user);
  const { logout } = useLogout();

  return (
    <div className="margin-layout --details-content">
      <h3>Nombre:</h3>
      <span>{user.fullName}</span>
      <h3>Correo electrónico:</h3>
      <span> {user.email}</span>
      <h3>Rol: </h3>
      <span>{user.role}</span>
      <button className="button button--logout" onClick={() => logout()}>
        Cerrar sesión
      </button>
    </div>
  );
}
