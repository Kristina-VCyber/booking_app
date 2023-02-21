import React from "react";
import { TextField } from "@mui/material";
import { DatePicker as MuiPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { LOCALE, MASK } from "../../shared";

interface Props {
  date: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

export const DatePicker = ({ date, setSelectedDate }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={LOCALE}>
      <MuiPicker
        mask={MASK}
        renderInput={(params) => (
          <TextField {...params} sx={{ width: "100%", marginTop: "7px", fontWeight:"" }} />
        )}
        value={date}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
    </LocalizationProvider>
  );
};
