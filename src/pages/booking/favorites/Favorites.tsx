import React from "react";
import styles from "./Favorites.module.css";
import { Button, CardList } from "../../../components";
import { ArrowDown, ArrowUp } from "../../../assets";
import { bookingApi, getFavorites } from "../../../model";
import { useDispatch, useSelector } from "react-redux";

const ButtonBlock = () => {
  const dispatch = useDispatch();
  const onRatingClick = () => dispatch(bookingApi.setRatingFilter());
  const onPriceClick = () => dispatch(bookingApi.setPriceFilter());
  return (
    <div className={styles.btnBlock}>
      <Button
        appearance="filter"
        className={styles.ratingBtn}
        onClick={onRatingClick}
      >
        <span>Рейтинг</span>
        <ArrowUp className={styles.ratingArrowUp} />
        <ArrowDown className={styles.ratingArrowDown} />
      </Button>
      <Button
        appearance="filter"
        className={styles.priceBtn}
        onClick={onPriceClick}
      >
        <span>Цена</span>
        <ArrowUp className={styles.priceArrowUp} />
        <ArrowDown className={styles.priceArrowDown} />
      </Button>
    </div>
  );
};

export const Favorites = () => {
  const favorites = useSelector(getFavorites);

  return (
    <div className={styles.favoritesWrapper}>
      <div className={styles.favoritesContent}>
        <h2 className={styles.favoritesTitle}>Избранное</h2>
        <div className={styles.favoritesFilterWrapper}>
          <ButtonBlock />
          <CardList
            className={styles.favoritesList}
            hotels={favorites}
            maxHeight={300}
            cardSize="short"
          />
        </div>
      </div>
    </div>
  );
};
