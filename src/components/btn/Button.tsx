import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from "./Button.module.css"
import classNames from "classnames";


type StandardType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export type ButtonProps = {
    children?: ReactNode
} & StandardType

export function Button({children, className, ...rest}: ButtonProps) {
    return (

        <button {...rest} className={classNames(styles.btn, className)}>{children}</button>

    );
}


