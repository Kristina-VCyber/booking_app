import React, { useEffect } from "react";
import styles from "./Login.module.css";
import { Button, Input } from "../../components";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  EMAIL_IS_NOT_VALID_ERROR,
  EMAIL_IS_REQUIRED_ERROR,
  EMAIL_REGEXP,
  PASSWORD_IS_REQUIRED_ERROR,
  PASSWORD_LATIN_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_ERROR,
  PASSWORD_REGEXP,
  SIGNED_IN_KEY,
  SIGNED_IN_VALUE,
} from "./constants";
import { useNavigate } from "react-router-dom";
import { paths } from "../../core/routes";

type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();
  const navigateHandler = () => navigate(paths.booking(), { replace: true });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    localStorage.setItem(SIGNED_IN_KEY, SIGNED_IN_VALUE);
    navigateHandler();
  };

  useEffect(() => {
    if (localStorage.getItem(SIGNED_IN_KEY) === SIGNED_IN_VALUE) {
      navigateHandler();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Simple Hotel Check</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <span className={styles.authFormLabel}>Логин</span>
          <Input
            {...register("email", {
              required: EMAIL_IS_REQUIRED_ERROR,
              pattern: {
                value: EMAIL_REGEXP,
                message: EMAIL_IS_NOT_VALID_ERROR,
              },
            })}
            error={errors.email?.message}
            onKeyUp={() => trigger("email")}
            className={styles.email}
          />
          <span className={styles.authFormLabel}>Пароль</span>
          <Input
            {...register("password", {
              required: PASSWORD_IS_REQUIRED_ERROR,
              minLength: {
                value: PASSWORD_MIN_LENGTH,
                message: PASSWORD_MIN_LENGTH_ERROR,
              },
              pattern: {
                value: PASSWORD_REGEXP,
                message: PASSWORD_LATIN_ERROR,
              },
            })}
            error={errors.password?.message}
          />
          <Button appearance="primary" type="submit" className={styles.btn}>
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
}
