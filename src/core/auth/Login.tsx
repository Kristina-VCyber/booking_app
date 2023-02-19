import React, { useEffect } from 'react';
import styles from "./Login.module.css"
import { AuthPageBackground } from "./AuthPageBackground";
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
    PASSWORD_REGEXP, SIGNED_IN_KEY, SIGNED_IN_VALUE
} from "./constants";
import { useNavigate } from "react-router-dom";
import { paths } from "../routes";


type Inputs = {
    email: string,
    password: string,
};



export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, trigger, formState: { errors } } = useForm<Inputs>(
        {
            mode: "onSubmit",
            reValidateMode: "onSubmit",
        }
    );


    const onSubmit: SubmitHandler<Inputs> = () => {
        localStorage.setItem(SIGNED_IN_KEY, SIGNED_IN_VALUE)
        navigate(paths.hotels(), { replace: true })
    };



    useEffect(() => {
        if (localStorage.getItem(SIGNED_IN_KEY) === SIGNED_IN_VALUE) {
            navigate("/hotels", { replace: true });
        }
    }, []);


    return (
        <div>
            <AuthPageBackground/>
            <div className={styles.wrapper}>
                <div className={styles.authTitleWrapper}>
                    <h1 className={styles.authTitle}>Simple Hotel Check</h1>
                </div>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input label="Логин"  {...register("email", {
                            required: EMAIL_IS_REQUIRED_ERROR,
                            pattern: {
                                value: EMAIL_REGEXP,
                                message: EMAIL_IS_NOT_VALID_ERROR
                            }
                        })} error={errors.email?.message} onKeyUp={() => trigger("email")}

                        />

                        <Input label="Пароль" {...register("password", {
                            required: PASSWORD_IS_REQUIRED_ERROR, minLength: {
                                value: PASSWORD_MIN_LENGTH,
                                message: PASSWORD_MIN_LENGTH_ERROR
                            },
                            pattern: {
                                value: PASSWORD_REGEXP,
                                message: PASSWORD_LATIN_ERROR
                            }


                        })}
                               error={errors.password?.message}/>
                        <Button type="submit">Войти</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
