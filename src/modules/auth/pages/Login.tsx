import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { Optional } from "../../../utils/types";
import { login } from "../services/authService";
import { setAuth, setRole, setUserDetails } from "../../../redux/userSlice";
import { routes } from "../../../consts/routes";
import { Roles } from "../../../consts/roles";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: Optional<typeof values> = {};
      if (!values.email) {
        errors.email = "email is required*";
      }
      if (!values.password) {
        errors.password = "password is required*";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      setDisabled(true);
      login(values.email, values.password)
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
          setDisabled(false);
        });
    },
  });

  return (
    <>
      <form className="margin-layout form" onSubmit={loginForm.handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="Iemail">Email: </label>
        <input
          id="Iemail"
          type="text"
          name="email"
          value={loginForm.values.email}
          onChange={loginForm.handleChange}
          onFocus={loginForm.handleBlur}
        />
        <small className="error-message">
          {loginForm.touched.email && loginForm.errors.email}
        </small>
        <label htmlFor="Ipassword">Password: </label>
        <input
          id="Ipassword"
          type="text"
          name="password"
          value={loginForm.values.password}
          onFocus={loginForm.handleBlur}
          onChange={loginForm.handleChange}
        />
        <small className="error-message">
          {loginForm.touched.password && loginForm.errors.password}
        </small>
        <button type="submit" className="button" disabled={disabled}>
          Iniciar sesión
        </button>
        <Link
          className="button button--ghost"
          to={`/${routes.AUTH.name}/${routes.AUTH.SIGNUP}`}
        >
          ¿No tienes cuenta?, regístrate aquí
        </Link>
      </form>
    </>
  );
}
