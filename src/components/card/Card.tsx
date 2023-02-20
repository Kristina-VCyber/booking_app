import React, { ReactNode } from 'react';
import styles from "./Card.module.css"
import { Baseline, Dash, Heart, Home, HomeRoof } from "../../assets";
import { Rating } from "../rating/Rating";

type CardSize = "full" | "short";


const HomeIcon = () => {
    return (
        <div className={styles.iconWrapper}>
            <HomeRoof className={styles.homeRoofIcon}/>
            <Home className={styles.homeIcon}/>
        </div>)

}

const CARD_MAP: Record<CardSize, null | ReactNode> = {
    full: <HomeIcon/>,
    short: null
}

interface Props {
    size?: CardSize
}

export const Card = ({ size = "full" }: Props) => {
    return (
        <div className={styles.itemWrapper}>
            {CARD_MAP[size]}
            <div className={styles.ratingWrapper}>
                <h3>Moscow Marriott Grand Hotel</h3>
                <div className={styles.dateWrapper}>
                    <time>07.07.2023</time>
                    <Dash className={styles.dash}/>
                    <p> 1 день</p>
                </div>
                <Rating/>
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

