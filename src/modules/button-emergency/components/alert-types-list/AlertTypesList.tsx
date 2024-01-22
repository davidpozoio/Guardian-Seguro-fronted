import { useState } from "react";
import { AlertType } from "../../../../models/alertModel";
import { AlertTypeCard } from "../alert-type-card/AlertTypeCard";

import "./alertTypesList.styles.css";
import Menu from "../menu/Menu";

interface AlertTypeListProps {
  listOfAlertTypes: AlertType[];
}

export function AlertTypeList({ listOfAlertTypes = [] }: AlertTypeListProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [alert, setAlertType] = useState("");
  const [alertDescription, setAlertDescription] = useState("");

  const handleOpenMenu = (alertType: string, description: string) => {
    console.log(alertType);
    setIsOpenMenu(true);
    setAlertType(alertType);
    setAlertDescription(description);
  };

  const handleClose = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className="list-grid">
      {isOpenMenu && (
        <Menu
          alertType={alert}
          description={alertDescription}
          onClose={handleClose}
        />
      )}
      {listOfAlertTypes.map((alertType, index) => {
        return (
          <AlertTypeCard
            key={index}
            name={alertType.name}
            description={alertType.description}
            url={alertType.url}
            onClick={handleOpenMenu}
          />
        );
      })}
    </div>
  );
}
