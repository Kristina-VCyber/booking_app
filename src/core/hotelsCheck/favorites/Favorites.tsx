import React from 'react';
import styles from "./Favorites.module.css";
import { Button, DatabaseList } from "../../../components";
import { ArrowDown, ArrowUp } from "../../../assets";


export const Favorites = () => {
    return (
        <div className={styles.favoritesWrapper}>
            <div className={styles.favoritesContent}>
                <h2 className={styles.favoritesTitle}>Избранное</h2>
                <div className={styles.favoritesFilterWrapper}>
                    <Button appearance='filter' className={styles.ratingBtn}> <span>Рейтинг</span>
                        <ArrowUp className={styles.ratingArrowUp}/>
                        <ArrowDown className={styles.ratingArrowDown}/>
                    </Button>
                    <Button appearance='filter' className={styles.priceBtn}> <span>Цена</span>
                        <ArrowUp className={styles.priceArrowUp}/>
                        <ArrowDown className={styles.priceArrowDown}/>
                    </Button>
                </div>

            </div>

        </div>
    )
}