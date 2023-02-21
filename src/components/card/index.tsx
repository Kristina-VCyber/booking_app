import React, { ReactNode } from "react";
import styles from "./Card.module.css";
import { Baseline, Dash, HeartEmpty, HeartGrey, HeartRed, Home, HomeRoof, } from "../../assets";
import { Rating } from "../rating";
import { declOfNumber } from "../../shared";
import { Hotel } from "../../model";

export type CardSize = "full" | "short";

const HomeIcon = () => {
  return (
      <div className={styles.iconWrapper}>
        <HomeRoof className={styles.homeRoofIcon}/>
        <Home className={styles.homeIcon}/>
      </div>
  );
};

const CARD_MAP: Record<CardSize, null | ReactNode> = {
  full: <HomeIcon/>,
  short: null,
};

interface Props {
  size?: CardSize;
  hotel: Hotel;
  onFavoriteToggle: (hotel: Hotel) => void;
}

export const Card = ({ size = "full", hotel, onFavoriteToggle }: Props) => {
  const { priceAvg, stars, daysAmount, hotelName, checkIn, isFavorite } = hotel;

  const pluralize = declOfNumber(daysAmount, ["день", "дня", "дней"]);
  return (
      <div className={styles.itemWrapper}>
        <div className={styles.container}>
          {CARD_MAP[size]}
          <div className={styles.mainBlockWrapper}>
            <h3 className={styles.hotelTitle}>{hotelName}</h3>
            <div className={styles.dateWrapper}>
              <time>{checkIn}</time>
              <Dash className={styles.dash}/>
              <p>
                {" "}
                {daysAmount} {pluralize}
              </p>
            </div>
            <Rating rating={stars}/>
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.btnWrapper} onClick={() => onFavoriteToggle(hotel)}>
            {isFavorite ? <HeartRed className={styles.redHeart}/> : <HeartEmpty className={styles.defaultHeart}/>}
            <HeartGrey className={styles.greyHeart}/>
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.priceTitle}>Price:</p>
            <span className={styles.priceValue}>{priceAvg} ₽</span>
          </div>
        </div>

        <Baseline className={styles.baseline}/>
      </div>
  );
};
