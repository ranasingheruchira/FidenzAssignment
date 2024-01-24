import React from "react";
import { Grid } from "@mui/material";
import { footer_messsage } from "../constants/Constants";

export default function Footer() {
  return (
    <footer className="footer">
      <Grid container justifyContent="center" alignItems="center">
        {footer_messsage}
      </Grid>
    </footer>
  );
}
