import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styles from "./FilterBtn.module.css"

type StandardType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export type FilterBtnProps = {
    children?: ReactNode
} & StandardType

export const FilterBtn =  ({ children, ...rest }: FilterBtnProps) => {
        return (

            <button {...rest} className={styles.btn}>{children}</button>

        );
    }
