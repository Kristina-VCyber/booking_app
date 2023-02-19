import React from 'react';
import styles from "./Login.module.css"
import { AuthPageBackground } from "./AuthPageBackground";
import { Button, Input } from "../../components";


export function Login() {
    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log("onSubmit")
    }
    return (
        <div>
            <AuthPageBackground/>
            <div className={styles.wrapper}>
                <div className={styles.authTitleWrapper}>
                    <h1 className={styles.authTitle}>Simple Hotel Check</h1>
                </div>
                <div className={styles.form}>
                    <form onSubmit={onSubmit} noValidate>
                        <Input label="Логин" type='email'/>
                        <Input label="Пароль" type='password'/>
                        <Button type="submit">Войти</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}


