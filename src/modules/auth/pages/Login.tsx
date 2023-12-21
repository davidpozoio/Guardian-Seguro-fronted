import { FormEvent } from "react";
import { login } from "../services/authService";
import { useDispatch } from "react-redux";
import { setAuth, setRole, setUserDetails } from "../../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../consts/routes";
import { Roles } from "../../../consts/roles";

type FormToLogin = { email: string; password: string };

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    ) as FormToLogin;

    login(formData.email, formData.password)
      .then((res) => {
        console.log("GOOD", res);
        const user = res.data;
        dispatch(setAuth({ isAuth: true }));
        dispatch(
          setUserDetails({
            fullName: user.fullName,
            email: user.email,
            latitude: user.latitude,
            longitude: user.longitude,
            role: user.role,
          })
        );
        navigate(`/${routes.HOME.name}`);
      })
      .catch((res) => {
        console.log("BAD", res);
        dispatch(setAuth({ isAuth: false }));
        dispatch(setRole({ role: Roles.INVALID }));
      });
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="Iemail">email: </label>
        <input id="Iemail" type="text" name="email" />
        <label htmlFor="Ipassword">password: </label>
        <input id="Ipassword" type="text" name="password" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
