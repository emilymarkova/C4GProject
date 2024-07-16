import logo from "./logo.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./SignUp.css";
import NavBar from "../Components/NavBar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import app from "../firebaseConfig";
import { Link as RouterLink , useNavigate} from "react-router-dom";
import { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { execPath } from "process";import transition from "../transiton";

function SignUp() {
  const navigate = useNavigate();
  let [firstName, setFirstName] = useState<string>("");
  let [lastName, setLastName] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let [loginError, setLoginError] = useState<String>("");

  const saveData = async () => {
    try {
      var auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await signInWithEmailAndPassword(auth, email, password);

      const db = getDatabase(app);
      const userRef = ref(db, "users/" + user.uid);
      set(userRef, {
        firstName: firstName,
        lastName: lastName,
      });
      navigate("/");
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoginError("There was an error logging in. Please check your email and password.");
    }
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
                label="First Name"
                variant="standard"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                sx={{
                  marginBottom: "10px",
                  display: "block",
                  "& .MuiInputBase-input": { width: "100%" },
                }}
              />
              <TextField
                id="standard-basic"
                fullWidth
                label="Last Name"
                variant="standard"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                sx={{
                  marginBottom: "10px",
                  display: "block",
                  "& .MuiInputBase-input": { width: "100%" },
                }}
              />
              <TextField
                fullWidth
                id="standard-basic"
                label="Email"
                variant="standard"
                value={email}
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
                label="Password (6+ characters)"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
                onClick={saveData}
              >
                Sign up
              </Button>
              <Button
                key="Login"
                component={RouterLink}
                to="/login"
                className="nav-button navBar"
                disableRipple
                sx={{
                  mr: 5,
                  mx: 5,
                  display: "block",
                  textDecoration: "none",
                  textTransform: "capitalize",
                }}
              >
                Or Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default transition(SignUp);