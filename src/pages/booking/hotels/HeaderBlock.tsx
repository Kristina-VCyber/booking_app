import React from "react";
import styles from "./Header.module.css";
import { Arrow } from "../../../assets";
import { getFullDate } from "../../../shared/formDate";

interface Props {
    title: string;
    date: string;
}



export const HeaderBlock = ({ title, date }: Props) => {


    return (
        <div className={styles.cardHeaderWrapper}>
            <div className={styles.cardTitleWrapper}>
                <h2 className={styles.cardTitle}>Отели</h2>
                <Arrow className={styles.arrowIcon}/>
                <h2>{title}</h2>
            </div>
            <time className={styles.date}>{getFullDate(new Date(date))}</time>
        </div>
    );
};
