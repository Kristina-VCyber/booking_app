import React from "react";
import styles from "./DatabaseCard.module.css";
import { DatabaseHeader } from "./DatabaseHeader";
import { DatabaseList } from "../../../components/databaseList/DatabaseList";

export const DatabaseCard = () => {
    return (
        <div className={styles.cardWrapper}>
            <DatabaseHeader/>
            <DatabaseList/>
        </div>
    )
}