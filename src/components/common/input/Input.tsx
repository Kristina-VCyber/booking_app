import React from 'react';

import styles from "./Input.module.css"

type InputProps = {
    title:string
}


export function Input({title}:InputProps) {
    return (
        <div className={styles.inputWrapper}>
            <span className={styles.title}>{title}</span>
            <input className={styles.input}/>
        </div>
    );
}


