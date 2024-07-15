import logo from "./logo.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./SignUp.css";
import NavBar from "../Components/NavBar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  let [loginError, setLoginError] = useState<String>("");
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  const login = async (event:any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        event.preventDefault();
        alert(errorMessage);
        setLoginError("There was an error logging in. Please check your email and password.");
      });
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
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          flex: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#013752",
            maxWidth: "100%",
            width: "550px",
            maxHeight: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#20A4A4",
              height: "80%",
              width: "80%",
              margin: "10px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "15px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <Typography id="error" variant="body2" sx={{ color: "#A63232" }}>{loginError}</Typography>
              <TextField
                id="standard-basic"
                fullWidth
                label="Email"
                variant="standard"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                sx={{
                  marginBottom: "10px",
                  display: "block",
                  "& .MuiInputBase-input": { width: "100%" },
                }}
              />
              <TextField
                fullWidth
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                variant="standard"
                sx={{
                  marginBottom: "10px",
                  display: "block",
                  "& .MuiInputBase-input": { width: "100%" },
                }}
              />

              <Button
                variant="contained"
                size="medium"
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "#013752",
                  textTransform: "none",
                  margin: "10px",
                }}
                onClick={login}
              >
                Login
              </Button>
              <Button
                key="SignUp"
                component={RouterLink}
                to="/signUp"
                className="nav-button navBar"
                disableRipple
                sx={{
                  mr: 5,
                  mx: 5,
                  display: "block",
                  fontFamily: "Arial",
                  textDecoration: "none",
                  textTransform: "capitalize",
                }}
              >
                Or Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
