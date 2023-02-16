import React from 'react';
import { Button } from "../common/btn/Button";
import { Input } from "../common/input/Input";
import styles from "./Login.module.css"


export function Login() {
    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log("onSubmit")
    }
    return (
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
    )
}


