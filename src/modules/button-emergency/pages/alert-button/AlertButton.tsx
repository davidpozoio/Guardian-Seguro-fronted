import { Link } from "react-router-dom";
import { routes } from "../../../../consts/routes";

import "./alertButton.styles.css";

export function AlertButton() {
  return (
    <div className="margin-layout alert-button-page">
      <div></div>
      <div className="content --full-width margin-layout">
        <h1 className="title">Guardian en línea</h1>
        <Link className="alert-button" to={routes.ALERT.TYPES()}></Link>
      </div>
    </div>
  );
}
