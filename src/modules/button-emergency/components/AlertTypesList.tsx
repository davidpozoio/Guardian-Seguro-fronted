import { AlertType } from "../../../models/alertModel";
import { AlertTypeCard } from "./AlertTypeCard";

interface AlertTypeListProps {
  listOfAlertTypes: AlertType[];
}

export function AlertTypeList({ listOfAlertTypes = [] }: AlertTypeListProps) {
  return (
    <div>
      {listOfAlertTypes.map((alertType, index) => {
        return <AlertTypeCard key={index} name={alertType.name} />;
      })}
    </div>
  );
}
