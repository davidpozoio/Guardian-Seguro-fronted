import { Link } from "react-router-dom";
import { routes } from "../../../consts/routes";

export function AlertButton() {
  return <Link to={routes.ALERT.TYPES()}>Mark Emergency</Link>;
}
