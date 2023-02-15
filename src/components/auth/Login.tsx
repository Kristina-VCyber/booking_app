import React from 'react';
import { Button } from "../common/btn/Button";
import { Input } from "../common/input/Input";
import styles from "./Login.module.css"



export function Login() {

    const onSubmit = (e:any) => {
        e.preventDefault()
        console.log("onSubmit")
    }
    return (
        <div className={styles.authWrapper}>
            <h1 className={styles.authTitle}>Simple Hotel Check</h1>
            <div className={styles.authForm}>
        <form  onSubmit={onSubmit}>
            <Input title={"Логин"}/>
            <Input title={"Пароль"}/>
            <Button type={"submit"}>Войти</Button>
        </form>
            </div>
        </div>
    );
}


