import React from "react";
import styles from "./DatabaseCard.module.css";
import { DatabaseHeader } from "./DatabaseHeader";
export const DatabaseCard = () => {
    return (
        <div className={styles.cardWrapper}>
            <DatabaseHeader/>
        </div>
    )
}