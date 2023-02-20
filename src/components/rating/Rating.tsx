import { Rating as MuiRating, Typography } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';

export const Rating = () => {
    const [value, setValue] = React.useState<number | null>(4);
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend"></Typography>
            <MuiRating name="read-only" value={value} readOnly/>
        </Box>
    );
}