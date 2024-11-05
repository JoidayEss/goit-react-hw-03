import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const nameField = useId();
  const numberField = useId();

  const validationForm = yup.object({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Please, enter your name"),
    number: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Please, enter your number"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => onSubmit(values, actions)}
      validationSchema={validationForm}
    >
      <Form className={s.form}>
        <div className={s.input}>
          <label className={s.name_label} htmlFor={nameField}>
            Name
          </label>
          <Field className={s.field} type="text" name="name" id={nameField} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={s.input}>
          <label className={s.name_label} htmlFor={numberField}>
            Number
          </label>
          <Field
            className={s.field}
            type="tel"
            name="number"
            id={numberField}
          />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
