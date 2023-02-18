import React from "react";
import { Header } from "./header/Header";
import styles from "./HotelsCheck.module.css"
import { Location } from "./location/Location";
import { Favorites } from "./favorites/Favorites";
import { Results } from "./results/Results";

export const HotelsCheck = () => {
    return (
        <div className={styles.hotelsWrapper}>
            <Header/>
            <div className={styles.unitedLeftBlock}>
                <Location/>
                <Favorites/>
            </div>
            <Results/>
        </div>
    )
}