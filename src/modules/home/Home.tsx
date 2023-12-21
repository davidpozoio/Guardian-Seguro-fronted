import { Navigation } from "./components/Navigation";
import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
}
