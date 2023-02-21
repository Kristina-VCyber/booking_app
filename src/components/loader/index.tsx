import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  className?: string;
}

export const Loader = ({ className }: Props) => (
  <CircularProgress className={className} />
);
