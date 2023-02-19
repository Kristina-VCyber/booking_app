import React from "react";
import styles from "./DatabaseCard.module.css";
import { DatabaseHeader } from "./DatabaseHeader";
import { DatabaseList } from "../../../components/databaseList/DatabaseList";

export const DatabaseCard = () => {
    return (
        <section className={styles.cardWrapper}>
            <div className={styles.cardContainer}>
            <DatabaseHeader/>
            <DatabaseList/>
            </div>
        </section>
    )
}