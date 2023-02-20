import React from 'react';
import { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    return (
        <Stack spacing = {4} sx={{width:"100px"}}>
            <DatePicker
            label="Date Picker"
            renderInput={(params) => <TextField {...params}/>}
            value={selectedDate}
            onChange={ (newValue) => {setSelectedDate(newValue)}}/>
        </Stack>
    )
}