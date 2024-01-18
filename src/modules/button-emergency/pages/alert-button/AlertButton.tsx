import { Link } from "react-router-dom";
import { routes } from "../../../../consts/routes";

import "./alertButton.styles.css";
import AlertButtonIcon from "../../../../assets/icons/AlertButtonIcon";

export function AlertButton() {
  return (
    <div className="margin-layout alert-button-page">
      <div></div>
      <div className="content --full-width margin-layout">
        <h1 className="title-button">Guardian en línea</h1>
        <Link className="alert-button" to={routes.ALERT.TYPES()}>
          <AlertButtonIcon />
        </Link>
      </div>
    </div>
  );
}
