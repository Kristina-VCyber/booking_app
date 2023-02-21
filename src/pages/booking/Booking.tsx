import React, { useEffect } from "react";
import { Header } from "../../components";
import styles from "./Booking.module.css";
import { BookingForm } from "./location/BookingForm";
import { Favorites } from "./favorites/Favorites";
import { Hotels } from "./hotels/Hotels";
import { useDispatch } from "react-redux";
import { bookingApi } from "../../model";

export const Booking = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookingApi.getHotels());
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <aside className={styles.unitedLeftBlock}>
          <BookingForm />
          <Favorites />
        </aside>
        <Hotels />
      </div>
    </div>
  );
};
