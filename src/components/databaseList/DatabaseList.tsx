import React from 'react';
import { DatabaseListItem } from "./DatabaseListItem";
import styles from "./DatabaseList.module.css"

export const DatabaseList = () => {
    return (
        <div className={styles.databaseListWrapper}>
            <DatabaseListItem/>
        </div>
    );
};