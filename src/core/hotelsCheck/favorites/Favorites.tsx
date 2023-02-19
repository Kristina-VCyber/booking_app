import React from 'react';
import styles from "./Favorites.module.css";
import { Button, DatabaseList } from "../../../components";


export const Favorites = () => {
    return (
        <div className={styles.favoritesWrapper}>
            <div className={styles.favoritesContent}>
                <h2 className={styles.favoritesTitle}>Избранное</h2>
                <div className={styles.favoritesFilterWrapper}>
                    <Button appearance='filter'> Рейтинг</Button>
                    <Button appearance='filter'> Цена </Button>
                </div>
                <DatabaseList/>
            </div>

        </div>
    )
}