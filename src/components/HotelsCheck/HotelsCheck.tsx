import React from "react";
import { Header } from "./header/Header";
import styles from "./HotelsCheck.module.css"
import { Location } from "./location/Location";
import { Favorites } from "./favorites/Favorites";
import { DatabaseCard } from "./databaseCard/DatabaseCard";

export const HotelsCheck = () => {
    return (
        <div className={styles.hotelsPageWrapper}>
            <Header/>
            <div className={styles.hotelsContainer}>
                <div className={styles.hotelsCardsWrapper}>
            <div className={styles.unitedLeftBlock}>
                <Location/>
                <Favorites/>
            </div>
            <DatabaseCard/>
                </div>
            </div>
        </div>
    )
}