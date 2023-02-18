import React from 'react';
import { ExitButton } from "../../common/btn/ExitButton";
import styles from "./Header.module.css"


export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
           <h1 className={styles.headerTitle}>Simple Hotel Check</h1>
            <ExitButton/>
        </div>
    )
}