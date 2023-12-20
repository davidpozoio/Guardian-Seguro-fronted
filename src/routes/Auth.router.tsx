import { Route } from "react-router-dom";
import { Login } from "../modules/auth/pages/Login";
import { Signup } from "../modules/auth/pages/Signup";

export function AuthRouter() {
  return (
    <>
      <Route index element={<Login />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />} />
    </>
  );
}
