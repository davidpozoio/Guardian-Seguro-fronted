import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../../redux/store";
import { Roles } from "../../../consts/roles";
import { routes } from "../../../consts/routes";
import "./navigation.styles.css";
import AlertIcon from "../../../assets/icons/AlertIcon";
import NotificarionIcon from "../../../assets/icons/NotificarionIcon";
import UserIcon from "../../../assets/icons/UserIcon";

export function Navigation() {
  const user = useSelector((state: AppState) => state.user);

  switch (user.role) {
    case Roles.USER:
      return (
        <div style={{ display: "flex", gap: 10 }} className="navigator">
          <Link to={routes.HOME.ALERTS}>
            <AlertIcon />
          </Link>
          <Link to={routes.HOME.USER_DETAILS}>
            <UserIcon />
          </Link>
        </div>
      );
    case Roles.GUARD:
      return (
        <div style={{ display: "flex", gap: 10 }} className="navigator">
          <Link to={routes.HOME.NOTIFICATIONS}>
            <NotificarionIcon />
          </Link>
          <Link to={routes.HOME.USER_DETAILS}>
            <UserIcon />
          </Link>
        </div>
      );
    case Roles.ADMIN:
      return (
        <div style={{ display: "flex", gap: 10 }} className="navigator">
          <Link to={routes.HOME.ALERTS}>
            <AlertIcon />
          </Link>
          <Link to={routes.HOME.NOTIFICATIONS}>
            <NotificarionIcon />
          </Link>
          <Link to={routes.HOME.USER_DETAILS}>
            <UserIcon />
          </Link>
        </div>
      );
  }
}
