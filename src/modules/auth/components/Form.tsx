import { useForm, SubmitHandler, RegisterOptions } from "react-hook-form";
import "./form.styles.css";
import React from "react";

interface FormProps {
  fields: Fields;
  validations: RegisterOptions<{ [key: string]: string }>[];
  title: string;
}

interface Fields {
  [key: string]: {
    value: string;
    label: string;
  };
}

type FormFields<T> = { [k in keyof T]: string };

export const Form = ({ fields, validations, title = "" }: FormProps) => {
  const { register, handleSubmit, formState, trigger } =
    useForm<FormFields<typeof fields>>();

  const onSubmit: SubmitHandler<FormFields<typeof fields>> = (values) => {
    console.log(values);
  };

  const handleInputChange = async (fieldName: stringd) => {
    await trigger(fieldName);
  };

  return (
    <form className="margin-layout form" onSubmit={handleSubmit(onSubmit)}>
      <h2>{title}</h2>
      {Object.entries(fields).map(([key], index) => {
        return (
          <React.Fragment key={index}>
            <label htmlFor={`I${key}`}>{fields[key].label || key}</label>
            <input
              id={`I${key}`}
              {...register(key, {
                required: { value: true, message: "this field is required*" },
              })}
            />
            {formState.errors[key] && (
              <small className="error-message">
                {formState.errors[key]?.message}
              </small>
            )}
          </React.Fragment>
        );
      })}
      <button className="button">submit</button>
    </form>
  );
};
export default Form;
