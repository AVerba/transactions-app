import styles from './AuthForm.module.scss';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cx from 'classnames';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {useState} from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {Loader} from "../../Loader";
YupPassword(Yup);

export const AuthForm = ({ className}) => {
  const classList = cx(styles.authForm, className);

  const initState = {
    email: '',
    password: '',
  };
  const [loaderState, setLoaderState] = useState(false);
  const [initialValues, setInitialValues] = useState(initState);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("This field is required")
      .email("Incorrect email. Check the correctness of writing the email")
      .matches(
        /^(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[a-z_-]+\d*|\d*[a-z_-] [0-9A-Za-z]{1} )@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
        "Email must not contain special symbols"
      ),

    password: Yup.string()
      .required("This field is required")
      .min(6, "The password must be at least 6 characters")
      .max(20, "The password must not exceed 20 characters")
      .minLowercase(2, "The password must contain at least 2 lowercase Latin letters")
      .minUppercase(2, "The password must contain at least 2 uppercase Latin letters")
      .minNumbers(3, "The password must contain at least 3 digits")
      .minSymbols(1, "The password must contain at least 1 special symbol"),
  });

  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const onLogin = (data, e) => {
    e.preventDefault();
  };

  const onRegister = (data, e) => {
    e.preventDefault();
  };

  const onError = error => {
    error.email && Notify.failure(`${errors.email.message}`);
    error.password && Notify.failure(`${errors.password.message}`);
  };
  const resetAllFields = () => {
    resetField('email');
    resetField('password');
  };


  return (
    <>
      {loaderState && <Loader />}
      <Form className={classList}>
        <p>Trans App</p>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control/>
          <Form.Text></Form.Text>
        </Form.Group>
      </Form>
    </>

  )
}

AuthForm.propTypes = {
  className: PropTypes.string,
};

