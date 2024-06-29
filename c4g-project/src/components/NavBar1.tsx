import React from "react";
import { Typography } from "@mui/material";
import icon from "../images/icon.png";
import placeholderName from "../images/placeholder_name.png";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import NavDrawer from "./NavDrawer";
import { Link as RouterLink } from "react-router-dom";
import './NavBar1.css';

export default function NavBar1() {
  return (
    <Box
      className="nav"
      display="flex"
      alignItems="center"
      component="nav"
      position="static"
      flexDirection="row"
      style={{ background: "transparent", width: "100%", height: "60px" }}
    >
      <NavDrawer />
      <RouterLink
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          height: "100%",
        }}
      >
        <img
          src={icon}
          alt="Name"
          style={{ height: "40px", marginRight: "20px", marginLeft: "10px" }}
        />
        <Typography className="nav-text" variant="h4" sx={{ my: 4}}>
          CompanyName
        </Typography>
      </RouterLink>
      <Box
        className="nav"
        display="flex"
        alignItems="center"
        component="nav"
        position="static"
        flexDirection="row"
        sx={{
          marginLeft: "auto",
          height: "60px",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <RouterLink
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "none",
              marginRight: "130px",
            }}
          >
            <Typography className="nav-text" variant="h5" sx={{ my: 5 }}>
              Home
            </Typography>
          </RouterLink>
          <RouterLink
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "none",
              marginRight: "130px",
            }}
          >
            <Typography className="nav-text" variant="h5" sx={{ my: 5 }}>
              Calendar
            </Typography>
          </RouterLink>
        </Box>
        <RouterLink
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "none",
            margin: 0,
          }}
        >
          <img
            src={icon}
            style={{ height: "40px", marginRight: "10px", marginLeft: "10px" }}
            className="profile-pic"
            alt="Profile"
          ></img>
        </RouterLink>
      </Box>
    </Box>
  );
}
