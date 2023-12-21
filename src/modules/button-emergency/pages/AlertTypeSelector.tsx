import { ChangeEventHandler, useState } from "react";
import { alertTypes } from "../../../consts/alertTypes";
import { AlertTypeList } from "../components/AlertTypesList";

export function AlertTypeSelector() {
  const [alerts, setAlerts] = useState(alertTypes);

  const handleSearchTerm: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filteredAlerts = alertTypes.filter((alert) =>
      alert.name.toLowerCase().match(e.target.value.toLowerCase())
    );
    setAlerts(filteredAlerts);
  };

  return (
    <>
      <input type="text" onChange={handleSearchTerm} />
      <AlertTypeList listOfAlertTypes={alerts} />
    </>
  );
}
