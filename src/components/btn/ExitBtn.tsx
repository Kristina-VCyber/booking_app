import React from "react";
import styles from "./ExitBtn.module.css"

export const ExitBtn = () => {
    return (
        <button type="button"
                className={styles.exitBtnWrapper}>
            Выход
            <div className={styles.exitBtnIcon}>
            <span />
            </div>
        </button>
    );
}