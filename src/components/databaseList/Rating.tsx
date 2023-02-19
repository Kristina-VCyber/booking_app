import { Rating, Typography } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';

export function BasicRating() {
    const [value, setValue] = React.useState<number | null>(4);
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={value} readOnly/>
        </Box>
    );
}