import React from "react";
import { Grid } from "@mui/material";
import { add_btn_text } from "../../constants/Constants";

export default function AddCity() {
  return (
    <div className="add-city">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <input
            type="text"
            className="add-city-input"
            placeholder="Enter a City"
          />
        </Grid>
        <Grid item>
          <button className="add-city-btn">{add_btn_text}</button>
        </Grid>
      </Grid>
    </div>
  );
}
