import { formatDate } from "./formDate";

export const getCheckOutData = (checkIn: Date, days: number) => {
  const checkOut = new Date(checkIn.getTime());
  checkOut.setDate(checkOut.getDate() + parseInt(String(days), 10));
  return formatDate(checkOut);
};
