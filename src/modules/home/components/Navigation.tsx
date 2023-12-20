import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../../redux/store";
import { Roles } from "../../../consts/roles";

export function Navigation() {
  const user = useSelector((state: AppState) => state.user);

  switch (user.role) {
    case Roles.USER:
      return (
        <div style={{ display: "flex", gap: 10 }}>
          <Link to="">start</Link>
          <Link to="alert">alert</Link>
        </div>
      );
    case Roles.GUARD:
      return (
        <div style={{ display: "flex", gap: 10 }}>
          <Link to="">start</Link>
          <Link to="notifications">notifications</Link>
        </div>
      );
    case Roles.ADMIN:
      return (
        <div style={{ display: "flex", gap: 10 }}>
          <Link to="">start</Link>
          <Link to="notifications">notifications</Link>
          <Link to="alert">alert</Link>
        </div>
      );
  }
}
