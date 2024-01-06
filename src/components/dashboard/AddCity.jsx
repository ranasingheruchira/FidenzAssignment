import React from "react";
import { Grid } from "@mui/material";

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
          <button className="add-city-btn">Add City</button>
        </Grid>
      </Grid>
    </div>
  );
}
