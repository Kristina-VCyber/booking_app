import React, { useState } from 'react';
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { locale, maskMap } from "./constants";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { localeMap } from "./constants";

export const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    return (
        <LocalizationProvider
            dateAdapter={AdapterDateFns}
            locale={localeMap[locale]}>
            <DatePicker
                mask={maskMap[locale]}
                renderInput={(params) => <TextField {...params} sx={{ width: "100%", marginTop:"7px"}} />}
                value={selectedDate}
                onChange={(newValue) => {
                    setSelectedDate(newValue)
                }}/>
        </LocalizationProvider>
    )
}