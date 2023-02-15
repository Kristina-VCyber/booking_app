import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from "./Button.module.css"
type StandardType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export type ButtonProps = {
    children?: ReactNode
} & StandardType

export function Button({ children, ...rest }: ButtonProps) {
    return (

        <button {...rest} className={styles.btn}>{children}</button>

    );
}


