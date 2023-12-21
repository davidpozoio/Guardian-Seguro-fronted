import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../../redux/store";
import { Roles } from "../../../consts/roles";
import { routes } from "../../../consts/routes";

export function Navigation() {
  const user = useSelector((state: AppState) => state.user);

  switch (user.role) {
    case Roles.USER:
      return (
        <div style={{ display: "flex", gap: 10 }}>
          <Link to={routes.HOME.ALERTS}>alert</Link>
          <Link to={routes.HOME.USER_DETAILS}>user</Link>
        </div>
      );
    case Roles.GUARD:
      return (
        <div style={{ display: "flex", gap: 10 }}>
          <Link to={routes.HOME.NOTIFICATIONS}>notifications</Link>
          <Link to={routes.HOME.USER_DETAILS}>user</Link>
        </div>
      );
    case Roles.ADMIN:
      return (
        <div style={{ display: "flex", gap: 10 }}>
          <Link to={routes.HOME.ALERTS}>alert</Link>
          <Link to={routes.HOME.NOTIFICATIONS}>notifications</Link>
          <Link to={routes.HOME.USER_DETAILS}>user</Link>
        </div>
      );
  }
}
