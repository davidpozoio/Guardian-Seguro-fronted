import { useFormik } from "formik";
import { Optional } from "../../../utils/types";
import { signup } from "../services/authService";
import { RegisterUserDto } from "../models/RegisterUserDto";

export function Signup() {
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
        errors.fullName = "full name is required*";
      }

      if (!values.identification) {
        errors.identification = "identification is required*";
      }

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
      signup({ ...values, latitude: 1, longitude: 1 } as RegisterUserDto).then(
        (res) => {
          console.log(res);
        }
      );
    },
  });

  return (
    <>
      <form className="margin-layout form" onSubmit={signupForm.handleSubmit}>
        <h2>Signup</h2>
        <label htmlFor="IfullName">Full name: </label>
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

        <label htmlFor="Igender">Gender: </label>
        <select
          value={signupForm.values.gender}
          name="gender"
          className="select"
          onChange={signupForm.handleChange}
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <label htmlFor="Iidentification">Identification: </label>
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

        <label htmlFor="Ipassword">Password: </label>
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
          Signup
        </button>
      </form>
    </>
  );
}
