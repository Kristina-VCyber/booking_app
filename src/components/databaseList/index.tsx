import React from "react";
import { Card, CardSize } from "../card";
import styles from "./DatabaseList.module.css";
import { List } from "@mui/material";
import { bookingApi, Hotel } from "../../model";
import classNames from "classnames";
import { useDispatch } from "react-redux";

interface Props {
  className?: string;
  hotels: Hotel[];
  maxHeight?: number;
  cardSize?: CardSize;
}

export const CardList = ({
  className,
  hotels,
  maxHeight = 500,
  cardSize,
}: Props) => {
  const dispatch = useDispatch();
  const onFavoriteToggle = (hotel: Hotel) => {
    dispatch(bookingApi.toggleFavorite(hotel));
  };
  return (
    <List
      style={{ maxHeight, overflow: "scroll" }}
      className={classNames(className, styles.databaseListWrapper)}
    >
      {hotels.map((hotel) => (
        <li key={hotel.hotelId + hotel.priceAvg + hotel.daysAmount}>
          <Card
            size={cardSize}
            hotel={hotel}
            onFavoriteToggle={onFavoriteToggle}
          />
        </li>
      ))}
    </List>
  );
};
