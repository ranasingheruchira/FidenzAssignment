import React from "react";
import { Grid } from "@mui/material";
import headerImage from "../assets/backgrounds/HeaderImage.png";
import logo from "../assets/logos/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-background">
        <img src={headerImage} />
      </div>
      <Link to="/">
        <div className="logo">
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <img src={logo} />
            </Grid>
          </Grid>
        </div>
      </Link>
    </>
  );
}
