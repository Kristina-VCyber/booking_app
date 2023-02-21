import { call, put, select, takeEvery } from "redux-saga/effects";
import { bookingApi } from "../actions";
import { getBookingState, ReturnedState } from "../selectors";
import { Hotel } from "../reducers";

const BASE_URL = "https://engine.hotellook.com/api/v2/cache.json?";
function* fetchHotels() {
  try {
    const {
      location,
      lang,
      checkIn,
      checkOut,
      daysAmount,
      currency,
    }: ReturnedState = yield select(getBookingState);
    const request = () =>
      fetch(
        `${BASE_URL}${new URLSearchParams({
          location,
          checkIn,
          checkOut,
          currency,
          lang,
        })}`
      ).then((res) => res.json());

    const response: Hotel[] = yield call(request);

    const responseWithCheckInAndNumberOfDays = response.map((elem) => {
      return {
        ...elem,
        checkIn,
        daysAmount,
      };
    });

    yield put(bookingApi.getHotelsSuccess(responseWithCheckInAndNumberOfDays));
  } catch (error) {
    yield put(bookingApi.getHotelsError());
  }
}

export function* initSaga() {
  yield takeEvery("GET_HOTELS", fetchHotels);
}
