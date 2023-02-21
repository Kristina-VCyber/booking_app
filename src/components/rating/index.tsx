import { Rating as MuiRating, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

interface Props {
  rating: number;
}

export const Rating = ({ rating }: Props) => {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Typography component="legend"></Typography>
      <MuiRating name="read-only" value={rating} readOnly />
    </Box>
  );
};
