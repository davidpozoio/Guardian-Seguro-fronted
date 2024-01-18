import { useFormik } from "formik";
import { Optional } from "../../../utils/types";
import { signup } from "../services/authService";
import { RegisterUserDto } from "../models/RegisterUserDto";
import { useDispatch } from "react-redux";
import { setAuth, setRole, setUserDetails } from "../../../redux/userSlice";
import { Roles } from "../../../consts/roles";
import { Link } from "react-router-dom";
import { routes } from "../../../consts/routes";
import useGeo from "../../../hooks/useGeo";
import { useEffect } from "react";

export function Signup() {
  const { currentPosition, getGeolocation } = useGeo();

  useEffect(() => {
    getGeolocation();
  }, [getGeolocation]);

  const dispatch = useDispatch();
  const signupForm = useFormik({
    initialValues: {
      fullName: "",
      gender: "male",
      identification: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: Optional<typeof values> = {};
      if (!values.fullName) {
        errors.fullName = "este campo es obligatorio*";
      }

      if (!values.identification) {
        errors.identification = "este campo es obligatorio*";
      }

      if (!values.email) {
        errors.email = "este campo es obligatorio*";
      }

      if (!values.password) {
        errors.password = "este campo es obligatorio*";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      signup({
        ...values,
        latitude: currentPosition?.coords.latitude,
        longitude: currentPosition?.coords.longitude,
      } as RegisterUserDto)
        .then((authUser) => {
          dispatch(setAuth({ isAuth: true }));
          dispatch(
            setUserDetails({
              email: authUser.email,
              fullName: authUser.fullName,
              latitude: authUser.latitude,
              longitude: authUser.longitude,
              role: authUser.role,
            })
          );
        })
        .catch(() => {
          dispatch(setAuth({ isAuth: false }));
          dispatch(setRole({ role: Roles.INVALID }));
        });
    },
  });

  return (
    <>
      <form className="margin-layout form" onSubmit={signupForm.handleSubmit}>
        <h2>Registro</h2>
        <label htmlFor="IfullName">Nombre: </label>
        <input
          id="IfullName"
          type="text"
          name="fullName"
          value={signupForm.values.fullName}
          onChange={signupForm.handleChange}
          onFocus={signupForm.handleBlur}
        />
        <small className="error-message">
          {signupForm.touched.fullName && signupForm.errors.fullName}
        </small>

        <label htmlFor="Igender">Género: </label>
        <select
          value={signupForm.values.gender}
          name="gender"
          className="select"
          onChange={signupForm.handleChange}
        >
          <option value="male">hombre</option>
          <option value="female">mujer</option>
        </select>

        <label htmlFor="Iidentification">Cédula: </label>
        <input
          id="Iidentification"
          type="text"
          name="identification"
          value={signupForm.values.identification}
          onChange={signupForm.handleChange}
          onFocus={signupForm.handleBlur}
        />
        <small className="error-message">
          {signupForm.touched.identification &&
            signupForm.errors.identification}
        </small>

        <label htmlFor="Iemail">Email: </label>
        <input
          id="Iemail"
          type="text"
          name="email"
          value={signupForm.values.email}
          onChange={signupForm.handleChange}
          onFocus={signupForm.handleBlur}
        />
        <small className="error-message">
          {signupForm.touched.email && signupForm.errors.email}
        </small>

        <label htmlFor="Ipassword">Contraseña: </label>
        <input
          id="Ipassword"
          type="text"
          name="password"
          value={signupForm.values.password}
          onChange={signupForm.handleChange}
          onFocus={signupForm.handleBlur}
        />
        <small className="error-message">
          {signupForm.touched.password && signupForm.errors.password}
        </small>
        <button type="submit" className="button">
          Registrarse
        </button>
        <Link
          className="button button--ghost"
          to={`/${routes.AUTH.name}/${routes.AUTH.LOGIN}`}
        >
          ¿Ya tienes cuenta?, inicia sesión aquí
        </Link>
      </form>
    </>
  );
}
