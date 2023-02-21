import { FilterType, Hotel } from "../model/reducers/types";

const sortUp = (a: Hotel, b: Hotel, key: "priceAvg" | "stars") =>
  b[key] - a[key];
const sortDown = (a: Hotel, b: Hotel, key: "priceAvg" | "stars") =>
  a[key] - b[key];
export const filterBy = (filter: FilterType, elements: Hotel[]) => {
  if (elements.length < 2) return elements;
  switch (filter) {
    case "up_price":
      return elements.sort((a, b) => sortUp(a, b, "priceAvg"));
    case "down_price":
      return elements.sort((a, b) => sortDown(a, b, "priceAvg"));
    case "up_stars":
      return elements.sort((a, b) => sortUp(a, b, "stars"));
    case "down_stars":
      return elements.sort((a, b) => sortDown(a, b, "stars"));
    default: {
      return elements;
    }
  }
};
