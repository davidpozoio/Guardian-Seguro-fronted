import { Notification } from "../modules/home/pages/Notification";
import { Route } from "react-router-dom";
import { UserDetails } from "../modules/home/pages/UserDetails";
import { routes } from "../consts/routes";
import { ButtonEmergency } from "../modules/button-emergency/ButtonEmergency";
import { ButtonEmergencyRouter } from "./ButtonEmergency.router";

export function HomeRouter() {
  return (
    <>
      <Route path="" element={<ButtonEmergency />}>
        {ButtonEmergencyRouter()}
      </Route>
      <Route path={routes.HOME.ALERTS} element={<ButtonEmergency />}>
        {ButtonEmergencyRouter()}
      </Route>
      <Route path={routes.HOME.NOTIFICATIONS} element={<Notification />} />
      <Route path={routes.HOME.USER_DETAILS} element={<UserDetails />} />
    </>
  );
}
