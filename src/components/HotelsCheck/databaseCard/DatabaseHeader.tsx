import React from "react";
import styles from "./DatabaseHeader.module.css";

export const DatabaseHeader = () => {
    return (
        <div className={styles.cardHeaderWrapper}>
         <div className={styles.cardTitleWrapper}>
            <h1>Отели</h1>
             <span className={styles.icon}/>
            <h1>Москва</h1>
         </div>
            <time>18.02.2023</time>
        </div>
    )
}