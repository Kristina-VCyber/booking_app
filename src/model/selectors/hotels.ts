import { AppRootStateType } from "../store";

export interface ReturnedState {
  location: string;
  checkIn: string;
  checkOut: string;
  currency: string;
  lang: string;
  daysAmount: number;
}

export const getCurrentLocation = (state: AppRootStateType) =>
  state.bookingReducer.location;
export const getHotels = (state: AppRootStateType) =>
  state.bookingReducer.hotels;
export const getFavorites = (state: AppRootStateType) =>
  state.bookingReducer.favorites;
export const getIsLoading = (state: AppRootStateType): boolean =>
  state.bookingReducer.loading;
export const getBookingState = (state: AppRootStateType): ReturnedState => ({
  location: state.bookingReducer.location,
  checkIn: state.bookingReducer.checkIn,
  checkOut: state.bookingReducer.checkOut,
  currency: state.bookingReducer.currency,
  lang: state.bookingReducer.lang,
  daysAmount: state.bookingReducer.daysAmount,
});
export const getBookingData = (state: AppRootStateType) => ({
  checkIn: state.bookingReducer.checkIn,
  daysAmount: state.bookingReducer.daysAmount,
  location: state.bookingReducer.location,
});
