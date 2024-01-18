import { ChangeEventHandler, useState } from "react";
import { alertTypes } from "../../../../consts/alertTypes";
import { AlertTypeList } from "../../components/alert-types-list/AlertTypesList";
import "./alertTypeSelector.styles.css";
import SearchBar from "../../components/search-bar/SearchBar";

export function AlertTypeSelector() {
  const [alerts, setAlerts] = useState(alertTypes);

  const handleSearchTerm: ChangeEventHandler<HTMLInputElement> = (e) => {
    const filteredAlerts = alertTypes.filter((alert) =>
      alert.name.toLowerCase().match(e.target.value.toLowerCase())
    );
    setAlerts(filteredAlerts);
  };

  return (
    <div className="margin-layout alert-type-selector-page --alerts-content">
      <h1 className="title">Alertas</h1>
      <SearchBar onChange={handleSearchTerm} />
      <AlertTypeList listOfAlertTypes={alerts} />
    </div>
  );
}
