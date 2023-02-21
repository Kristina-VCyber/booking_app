interface Geo {
  lon: number;
  lat: number;
}

interface Location {
  geo: Geo;
  state: unknown | null;
  country: string;
  name: string;
}

interface PricePercentile {
  "3": number;
  "10": number;
  "35": number;
  "50": number;
  "75": number;
  "90": number;
}

export interface Hotel {
  pricePercentile: PricePercentile;
  locationId: string;
  location: Location;
  priceAvg: number;
  hotelName: string;
  stars: number;
  hotelId: number;
  priceFrom: number;
  checkIn: string;
  daysAmount: number;
  isFavorite?: boolean;
}

export interface InitialState {
  hotels: Hotel[];
  favorites: Hotel[];
  loading: boolean;
  error: boolean;
  location: string;
  checkIn: string;
  checkOut: string;
  daysAmount: number;
  currency: string;
  lang: string;
  filter: FilterType;
}

export type FilterType = "up_stars" | "down_stars" | "up_price" | "down_price";
