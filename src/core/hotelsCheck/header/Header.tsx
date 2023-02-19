import React from 'react';
import { ExitBtn } from "../../../components/btn/ExitBtn";
import styles from "./Header.module.css"


export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
           <h2 className={styles.headerTitle}>Simple Hotel Check</h2>
            <ExitBtn/>
        </div>
    )
}