import React from "react";
import styles from "./Hotels.module.css";
import { HeaderBlock } from "./HeaderBlock";
import { CardList, Carousel, Loader } from "../../../components";
import { IMAGES } from "./constants";
import { useSelector } from "react-redux";
import {
  getBookingData,
  getCurrentLocation,
  getFavorites,
  getHotels,
  getIsLoading,
} from "../../../model";
import { declOfNumber } from "../../../shared";

export const Hotels = () => {
  const location = useSelector(getCurrentLocation);
  const amount = useSelector(getFavorites).length;
  const isLoading = useSelector(getIsLoading);
  const hotels = useSelector(getHotels);
  const pluralize = declOfNumber(amount, ["отель", "отеля", "отелей"]);
  const date = useSelector(getBookingData).checkIn


  return (
    <section className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <HeaderBlock title={location}  date={date} />
        <Carousel data={IMAGES} />
        <div className={styles.favoritesResult}>
          Добавлено в Избранное:
          <span>
            <span className={styles.resultNumber}>{amount}</span>
            {pluralize}
          </span>
        </div>
        {isLoading ? (
          <Loader className={styles.loader} />
        ) : (
          <CardList hotels={hotels} maxHeight={560} />
        )}
      </div>
    </section>
  );
};
