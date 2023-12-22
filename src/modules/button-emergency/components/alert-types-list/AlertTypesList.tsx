import { AlertType } from "../../../../models/alertModel";
import { AlertTypeCard } from "../alert-type-card/AlertTypeCard";

import "./alertTypesList.styles.css";

interface AlertTypeListProps {
  listOfAlertTypes: AlertType[];
}

export function AlertTypeList({ listOfAlertTypes = [] }: AlertTypeListProps) {
  return (
    <div className="list-grid">
      {listOfAlertTypes.map((alertType, index) => {
        return (
          <AlertTypeCard
            key={index}
            name={alertType.name}
            url={alertType.url}
          />
        );
      })}
    </div>
  );
}
