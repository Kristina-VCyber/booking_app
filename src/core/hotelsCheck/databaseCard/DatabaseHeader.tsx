import React from "react";
import styles from "./DatabaseHeader.module.css";
import { Arrow } from "../../../assets";

export const DatabaseHeader = () => {
    return (
        <div className={styles.cardHeaderWrapper}>
            <div className={styles.cardTitleWrapper}>
                <h2 className={styles.cardTitle}>Отели</h2>
                <Arrow className={styles.arrowIcon}/>
                <h2>Москва</h2>
            </div>
            <time className={styles.date}>18.02.2023</time>
        </div>
    )
}