import React from 'react';
import styles from "./Location.module.css"
import { Input } from "../../common/input/Input";
import { Button } from "../../common/btn/Button";


export const Location = () => {
    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log("onSubmit")
    }
    return (
                <div className={styles.locationFormWrapper}>
                    <form onSubmit={onSubmit} className={styles.locationForm} noValidate>
                        <Input label="Локация" type='text' />
                        <Input label="Дата заселения" type='date'/>
                        <Input label="Количество дней" type='number'/>
                        <Button type="submit">Найти</Button>
                    </form>
                </div>

    )
}


