import { Outlet } from "react-router-dom";
import { isAuth } from "./services/authService";
import { useEffect, useState } from "react";
import { setAuth, setRole, setUserDetails } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { Roles } from "../../consts/roles";

export function Auth() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  //check if the user is logged and login automatically
  useEffect(() => {
    isAuth()
      .then((res) => {
        const user = res.data;
        dispatch(setAuth({ isAuth: true }));
        dispatch(setUserDetails({ ...user }));
      })
      .catch(() => {
        dispatch(setAuth({ isAuth: false }));
        dispatch(setRole({ role: Roles.INVALID }));
      })
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return <>{isLoading ? <p>Iniciando sesión...</p> : <Outlet />}</>;
}
