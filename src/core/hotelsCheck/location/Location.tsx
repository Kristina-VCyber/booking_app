import React from 'react';
import styles from "./Location.module.css"
import { Button, Input } from "../../../components";
import { MuiPicker } from "./DatePicker";

// export type LocationType = {
//     location: string,
//     checkInData: string,
//     daysNum: string
// }
export const Location = () => {
    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log("onSubmit")
    }
    // const onLocationChangeHandler = (e) => {
    //     setLocation(e.target.value);
    // };
    return (

        <div className={styles.locationFormWrapper}>
            <form onSubmit={onSubmit} className={styles.locationForm} noValidate>
                <div className={styles.blockItem}>
                    <h4>Локация</h4>
                    <Input type='text'/>
                </div>
                <div className={styles.blockItem}>
                    <h4>Дата заселения</h4>
                    <MuiPicker/>
                </div>
                <div className={styles.blockItem}>
                    <h4>Количество дней</h4>
                    <Input type='number'/>
                </div>
                <Button appearance="primary" type="submit" className={styles.btn}>Найти</Button>

            </form>
        </div>

    )
}




