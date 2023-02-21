import { FilterType, Hotel, InitialState } from "./types";
import {
  formatDate,
  getCheckOutData,
  LANGUAGE,
  RUB_CURRENCY,
} from "../../shared";
import { ActionsBookingDomain } from "../actions";
import { filterBy } from "../../shared/filterBy";

const INIT_DAYS_AMOUNT = 1;
const initDate = formatDate(new Date());
const initCheckout = getCheckOutData(new Date(), INIT_DAYS_AMOUNT);

const initialState: InitialState = {
  hotels: [],
  location: "Москва",
  loading: false,
  error: false,
  checkIn: initDate,
  checkOut: initCheckout,
  daysAmount: INIT_DAYS_AMOUNT,
  currency: RUB_CURRENCY,
  lang: LANGUAGE,
  filter: "up_stars",
  favorites: [],
};

const getPredicate = (hotel: Hotel, favorite: Hotel) =>
  hotel.hotelId === favorite.hotelId &&
  hotel.checkIn === favorite.checkIn &&
  hotel.daysAmount === favorite.daysAmount;
const sortReducer = (actionFilter: FilterType, stateFavorites: Hotel[]) => {
  const map: Record<FilterType, FilterType> = {
    up_price: "down_price",
    down_price: "up_price",
    up_stars: "down_stars",
    down_stars: "up_stars",
  };
  const filter = map[actionFilter];
  const sorted = filterBy(filter, stateFavorites);
  return { sorted, filter };
};

function bookingReducer(state = initialState, action: ActionsBookingDomain) {
  switch (action.type) {
    case "GET_HOTELS":
      return {
        ...state,
        loading: true,
      };
    case "SET_BOOKING_INFO":
      return {
        ...state,
        ...action.payload,
      };
    case "GET_HOTELS_INFO_SUCCESS":
      return {
        ...state,
        hotels: action.hotels,
        loading: false,
      };

    case "GET_HOTELS_INFO_FAILED":
      return {
        ...state,
        error: true,
        loading: false,
      };

    case "TOGGLE_FAVOURITE_HOTEL":
      const payloadFavorite = action.favourite;

      if (payloadFavorite.isFavorite) {
        const hotels = state.hotels.map((e) => {
          if (getPredicate(e, payloadFavorite)) {
            return { ...e, isFavorite: false };
          }
          return e;
        });
        const idxToDelete = state.favorites.findIndex((e) =>
          getPredicate(e, payloadFavorite)
        );
        const favorites = [...state.favorites];
        favorites.splice(idxToDelete, 1);
        const sorted = filterBy(state.filter, favorites);
        return {
          ...state,
          hotels,
          favorites: sorted,
        };
      } else {
        const hotels = state.hotels.map((e) => {
          if (e.hotelId === payloadFavorite.hotelId) {
            return { ...e, isFavorite: true };
          }
          return e;
        });
        const newFavorite = {
          ...payloadFavorite,
          isFavorite: true,
        };
        const result = [...state.favorites, newFavorite];
        const sorted = filterBy(state.filter, result);
        return {
          ...state,
          hotels,
          favorites: sorted,
        };
      }
    case "FILTER_BY_RATING": {
      const prevFiltr = ["up_stars", "down_stars"].includes(state.filter)
        ? state.filter
        : "up_stars";
      const { sorted, filter } = sortReducer(prevFiltr, state.favorites);
      return {
        ...state,
        favorites: sorted,
        filter,
      };
    }
    case "FILTER_BY_PRICE": {
      const prevFiltr = ["up_price", "down_price"].includes(state.filter)
        ? state.filter
        : "up_price";
      const { sorted, filter } = sortReducer(prevFiltr, state.favorites);

      return {
        ...state,
        favorites: sorted,
        filter,
      };
    }

    default:
      return state;
  }
}

export { bookingReducer };
