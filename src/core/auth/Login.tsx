import React from 'react';
import styles from "./Login.module.css"
import { AuthPageBackground } from "./AuthPageBackground";
import { Button, Input } from "../../components";
import { SubmitHandler, useForm } from "react-hook-form";
import { EMAIL_IS_REQUIRED } from "./constants";


type Inputs = {
    email: string,
    password: string,
};

export function Login() {

    const { register, handleSubmit, trigger, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    console.log(errors)
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
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
                                message: "Неверный формат электронной почты"
                            }, required: EMAIL_IS_REQUIRED
                        })} error={errors.email?.message} onKeyUp={() => trigger("email")}/>


                        <Input label="Пароль" {...register("password", { required: true, minLength: 8 })}
                               error={errors.password?.message}/>
                        <Button type="submit">Войти</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
