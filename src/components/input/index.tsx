import React, { forwardRef } from 'react';

import styles from "./Input.module.css"
import { Props } from "./interface";

export const Input : React.FC<Props> = forwardRef( ({ label, error, ...rest }, ref ) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={label} className={styles.text}>
                {label}
            </label>
            <input
                ref={ref}
                className={styles.input}
                {...rest}
            />
            <p className={styles.error}>{error}</p>
        </div>
    );
}
)
