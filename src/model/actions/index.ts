import { Hotel } from "../reducers";
import { InitialState } from "../reducers/types";

type Payload = Pick<
  InitialState,
  "location" | "checkIn" | "checkOut" | "daysAmount"
>;

const bookingApi = {
  getHotels: () => ({ type: "GET_HOTELS" } as const),
  getHotelsSuccess: (hotels: Hotel[]) =>
    ({ type: "GET_HOTELS_INFO_SUCCESS", hotels } as const),
  getHotelsError: () => ({ type: "GET_HOTELS_INFO_FAILED" } as const),
  setBookingInfo: (payload: Payload) =>
    ({ type: "SET_BOOKING_INFO", payload } as const),
  toggleFavorite: (favourite: Hotel) =>
    ({ type: "TOGGLE_FAVOURITE_HOTEL", favourite } as const),
  setRatingFilter: () =>
    ({
      type: "FILTER_BY_RATING",
    } as const),
  setPriceFilter: () =>
    ({
      type: "FILTER_BY_PRICE",
    } as const),
};

type ActionsType = typeof bookingApi;
type ACNameType = keyof ActionsType;
type ACType = ActionsType[ACNameType];
type ActionsBookingDomain = ReturnType<ACType>;

export { bookingApi };
export type { ActionsBookingDomain };
