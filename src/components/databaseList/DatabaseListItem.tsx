import React from 'react';
import styles from "./DatabaseListItem.module.css"
import { BasicRating} from "./Rating";

export const DatabaseListItem = () => {
    return (
        <div className={styles.itemWrapper}>
            <div className={styles.iconWrapper}>
                <span/>
            </div>
            <div className={styles.ratingWrapper}>
                <h3>Moscow Marriott Grand Hotel</h3>
                <div className={styles.dateWrapper}>
                    <time>07.07.2023</time>
                    <span/>
                    <p></p>
                </div>
                <BasicRating/>

            </div>

        </div>
    )
}