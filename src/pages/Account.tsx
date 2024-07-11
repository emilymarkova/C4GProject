import * as React from "react";
import logo from "./logo.svg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./SignUp.css";
import NavBar from "../Components/NavBar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { Link as RouterLink } from "react-router-dom";

const style = {
  py: 0,
  width: "100%",
  // maxWidth: 360,
  borderRadius: 2,
  border: "none",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

export default function Account() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      className="login-page"
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavBar />
      <Box
        sx={{
          backgroundColor: "white",
          width: "90%",
          height: "90%",
          minHeight: "50vh",
          borderRadius: "25px",
          textAlign: "left",
          padding: "20px",
          color: "black",
        }}
      >
        <Typography variant="h5">Account</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: "60px", height: "60px", margin: "10px" }}
            src="/static/images/avatar/2.jpg"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="body2">Profile Picture</Typography>
            <Typography variant="caption">PNG, JPEG</Typography>
          </Box>
        </Box>

        <List sx={style}>
          <ListItem>
            <Box sx={{ marginTop: "10px", width: "100%" }}>
              <Typography>Full Name</Typography>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "25px",
                }}
              >
                <TextField
                  id="outlined-helperText"
                  label="First Name"
                  defaultValue="Current First"
                  fullWidth
                  sx={{
                    marginBottom: "10px",
                    // mr: "100px",
                    width: "100%",
                    maxWidth: "min(80%, 300px)",
                    flex: "1 1 auto",
                    // display: "block",
                    "& .MuiInputBase-input": { width: "100%" },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "15px",
                    },
                  }}
                />

                <TextField
                  id="outlined-helperText2"
                  label="Last Name"
                  defaultValue="Current Last"
                  fullWidth
                  sx={{
                    marginBottom: "10px",
                    mr: "100px",
                    width: "100%",
                    maxWidth: "min(80%, 300px)",
                    flex: "1 1 auto",

                    // display: "block",
                    "& .MuiInputBase-input": { width: "100%" },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "15px",
                    },
                  }}
                />
              </Box>
            </Box>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <Box sx={{ marginTop: "10px" }}>
              <Typography>Contact Email</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <TextField
                  id="outlined-helperText"
                  label="Email"
                  defaultValue="Current Email"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                    style: {
                      borderRadius: "15px",
                    },
                  }}
                  sx={{
                    marginBottom: "10px",
                    mr: "100px",
                    width: "100%",
                    maxWidth: "min(80%, 300px)",
                    flex: "1 1 auto",
                    // display: "block",
                    "& .MuiInputBase-input": { width: "100%" },
                  }}
                />
              </Box>
            </Box>
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <Box sx={{ marginTop: "10px" }}>
              <Typography>Password</Typography>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <FormControl
                  sx={{
                    // m: 1,
                    width: "100%",
                    maxWidth: "min(80%, 300px)",
                    flex: "1 1 auto",
                  }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Current Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Current Password"
                    sx={{ width: "100%" }}
                  />
                </FormControl>
                <FormControl
                  sx={{
                    // m: 1,
                    width: "100%",
                    maxWidth: "min(80%, 300px)",
                    flex: "1 1 auto",
                  }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    New Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="New Password"
                    sx={{ width: "100%" }}
                  />
                </FormControl>
              </Box>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
