import React from 'react';
import { Card } from "../card/Card";
import styles from "./DatabaseList.module.css"
import { List } from "@mui/material";

export const DatabaseList = () => {

    return (
        <List style={{ maxHeight: 529, overflow: 'scroll' }}>
            <div className={styles.databaseListWrapper}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </List>
    )
}





