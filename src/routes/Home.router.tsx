import { Alert } from "../modules/home/pages/Alert";
import { Notification } from "../modules/home/pages/Notification";
import { Start } from "../modules/home/pages/Start";
import { Route } from "react-router-dom";

export function HomeRouter() {
  return (
    <>
      <Route index element={<Start />}></Route>
      <Route path="notifications" element={<Notification />} />
      <Route path="alert" element={<Alert />} />
    </>
  );
}
