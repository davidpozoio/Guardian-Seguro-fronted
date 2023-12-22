import { Route } from "react-router-dom";
import { AlertButton } from "../modules/button-emergency/pages/alert-button/AlertButton";
import { AlertTypeSelector } from "../modules/button-emergency/pages/alert-type-selector/AlertTypeSelector";
import { routes } from "../consts/routes";

export function ButtonEmergencyRouter() {
  return (
    <>
      <Route path="" element={<AlertButton />} />
      <Route path={routes.ALERT.TYPES()} element={<AlertTypeSelector />} />
    </>
  );
}
