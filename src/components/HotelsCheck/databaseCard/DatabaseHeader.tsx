import React from "react";
import styles from "./DatabaseCard.module.css";

export const DatabaseHeader = () => {
    return (
        <div className={styles.cardHeaderWrapper}>
         <div className={styles.cardTitleWrapper}>
            <h1 className={styles.titleWithIcon}>Отели</h1>
            <h1>Москва</h1>
         </div>
            <time>18.02.2023</time>
        </div>
    )
}