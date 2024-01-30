import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Home } from "./modules/home/Home";
import { Auth } from "./modules/auth/Auth";
import { HomeRouter } from "./routes/Home.router";
import { AuthRouter } from "./routes/Auth.router";
import { ProtectedRoute } from "./guard/ProtectedRoute";
import { useSelector } from "react-redux";
import { AppState } from "./redux/store";
import { routes } from "./consts/routes";
import { useEffect } from "react";
import { Start } from "./modules/start/Start";
import { Roles } from "./consts/roles";

export function AppRouter() {
  const user = useSelector((state: AppState) => state.user);

  const navigate = useNavigate();
  const location = useLocation();

  //automatically when the page loads redirect to /start
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/start");
    }
  }, [navigate, location]);

  return (
    <>
      <Routes>
        <Route
          path="/start"
          element={
            <ProtectedRoute canActive={!user.isAuth} navigateTo="/home">
              <Start />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute
              canActive={user.isAuth}
              navigateTo={`/${routes.AUTH.name}`}
            >
              <Home />
            </ProtectedRoute>
          }
        >
          {HomeRouter()}
        </Route>
        <Route
          path="/auth"
          element={
            <ProtectedRoute
              canActive={!user.isAuth}
              navigateTo={`/${
                user.role === Roles.GUARD
                  ? routes.HOME.name + "/" + routes.HOME.NOTIFICATIONS
                  : routes.HOME.name
              }`}
            >
              <Auth />
            </ProtectedRoute>
          }
        >
          {AuthRouter()}
        </Route>
        <Route path="*" element={<p>Error 404: Page not found</p>} />
      </Routes>
    </>
  );
}
