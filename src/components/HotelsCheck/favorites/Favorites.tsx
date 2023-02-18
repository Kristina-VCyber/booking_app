import React from 'react';
import styles from "./Favorites.module.css";
import { FilterBtn } from "../../common/btn/FilterBtn";
import { DatabaseList } from "../../common/databaseList/DatabaseList";



export const Favorites = () => {
    return (
        <div className={styles.favoritesWrapper}>
            <div className={styles.favoritesContent}>
            <h2 className={styles.favoritesTitle}>Избранное</h2>
            <div className={styles.favoritesFilterWrapper}>
                <FilterBtn type="button"> Рейтинг</FilterBtn>
                <FilterBtn type="button"> Цена </FilterBtn>
            </div>
                <DatabaseList/>
            </div>

        </div>
    )
}