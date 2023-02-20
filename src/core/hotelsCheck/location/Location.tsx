import React from 'react';
import styles from "./Location.module.css"
import { Button, Input } from "../../../components";
import { MuiPicker } from "./DatePicker";


export const Location = () => {
    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log("onSubmit")
    }
    return (

        <div className={styles.locationFormWrapper}>
            <form onSubmit={onSubmit} className={styles.locationForm} noValidate>
                <Input label="Локация" type='text'/>
                <Input label="Дата заселения" type='date'/>
                {/*<MuiPicker/>*/}
                <Input label="Количество дней" type='number'/>
                <Button appearance="primary" type="submit" className={styles.btn}>Найти</Button>

            </form>
        </div>

    )
}




