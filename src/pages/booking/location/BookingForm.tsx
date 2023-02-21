import React, { FormEvent, useRef, useState } from "react";
import styles from "./Location.module.css";
import { Button, DatePicker, Input } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { bookingApi, getBookingData } from "../../../model";
import { formatDate, getCheckOutData } from "../../../shared";

export const BookingForm = () => {
  const dispatch = useDispatch();
  const { checkIn, daysAmount, location } = useSelector(getBookingData);
  const daysRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(checkIn)
  );
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const daysAmount = Number(daysRef.current?.value!);
    const location = locationRef.current?.value!;

    dispatch(
      bookingApi.setBookingInfo({
        location,
        checkIn: `${formatDate(selectedDate!)}`,
        checkOut: getCheckOutData(new Date(checkIn), Number(daysAmount)),
        daysAmount,
      })
    );
    dispatch(bookingApi.getHotels());
  };

  return (
    <div className={styles.locationFormWrapper}>
      <form onSubmit={onSubmit} className={styles.locationForm} noValidate>
        <Input
          ref={locationRef}
          name="place"
          type="text"
          label="Локация"
          defaultValue={location}
          className={styles.blockItem}
        />
        <div className={styles.blockItem}>
          <span className={styles.datePickerLabel}>Дата заселения</span>
          <DatePicker date={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
        <Input
          ref={daysRef}
          type="number"
          name="days"
          label="Количество дней"
          defaultValue={daysAmount}
          className={styles.blockItem}
        />
        <Button appearance="primary" type="submit" className={styles.btn}>
          Найти
        </Button>
      </form>
    </div>
  );
};
