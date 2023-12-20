import { useDispatch } from "react-redux";
import { Navigation } from "./components/Navigation";
import { Outlet } from "react-router-dom";
import { setRole } from "../../redux/userSlice";
import { Roles } from "../../consts/roles";

export function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(setRole({ role: Roles.ADMIN }));
        }}
      >
        change to admin
      </button>
      <Navigation />
      <Outlet />
    </>
  );
}
