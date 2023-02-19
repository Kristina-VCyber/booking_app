import React from "react";
import { Header } from "../../components";
import styles from "./HotelsCheck.module.css"
import { Location } from "./location/Location";
import { Favorites } from "./favorites/Favorites";
import { DatabaseCard } from "./databaseCard/DatabaseCard";

export const HotelsCheck = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <aside className={styles.unitedLeftBlock}>
                    <Location/>
                    <Favorites/>
                </aside>
                <DatabaseCard/>
            </div>
        </div>
    )
}