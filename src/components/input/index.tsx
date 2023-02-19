import React from 'react';

import styles from "./Input.module.css"
import { Props } from "./interface";

export const Input = ({ label, error, ...rest }: Props) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={label} className={styles.text}>
                {label}
            </label>
            <input
                className={styles.input}
                {...rest}
            />
            <p className={styles.error}>{error}</p>
        </div>
    );
}




