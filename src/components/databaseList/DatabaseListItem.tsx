import React from 'react';
import styles from "./DatabaseListItem.module.css"
import { BasicRating } from "./Rating";
import { Baseline, Dash, Heart, Home, HomeRoof } from "../../assets";

export const DatabaseListItem = () => {
    return (
        <div className={styles.itemWrapper}>
            <div className={styles.iconWrapper}>
                <HomeRoof className={styles.homeRoofIcon}/>
                <Home className={styles.homeIcon}/>
            </div>
            <div className={styles.ratingWrapper}>
                <h3>Moscow Marriott Grand Hotel</h3>
                <div className={styles.dateWrapper}>
                    <time>07.07.2023</time>
                    <Dash className={styles.dash}/>
                    <p> 1 день</p>
                </div>
                <BasicRating/>
            </div>
            <div className={styles.priceWrapper}>
                <Heart className={styles.heart}/>
                <div className={styles.priceContainer}>
                    <p className={styles.priceTitle}>Price:</p>
                    <span className={styles.priceValue}>23 000 ₽</span>
                </div>
            </div>
            <Baseline className={styles.baseline}/>
        </div>
    )
}