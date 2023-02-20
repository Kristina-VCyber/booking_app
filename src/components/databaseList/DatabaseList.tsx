import React from 'react';
import { DatabaseListItem } from "./DatabaseListItem";
import styles from "./DatabaseList.module.css"
import { List } from "@mui/material";

export const DatabaseList = () => {

    return (
        <List style={{ maxHeight: 529, overflow: 'scroll' }}>
            <div className={styles.databaseListWrapper}>
                <DatabaseListItem/>
                <DatabaseListItem/>
                <DatabaseListItem/>
                <DatabaseListItem/>
                <DatabaseListItem/>
            </div>
        </List>
    )
}





