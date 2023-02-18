import React from "react";
import styles from "./ExitButton.module.css"

export const ExitButton = () => {
    return (
        <button type="button"
                className={styles.exitBtnWrapper}>
            Выйти
            <div className={styles.exitBtnIcon}>
            <span />
            </div>
        </button>
    );
}