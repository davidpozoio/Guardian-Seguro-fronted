import { Navigation } from "./components/Navigation";
import { Outlet } from "react-router-dom";
import "./home.styles.css"

export function Home() {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
}
