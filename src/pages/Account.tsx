import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../Components/NavBar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { signOut } from "firebase/auth";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebaseConfig";
import transition from "../transition";
import "firebase/auth";
import "firebase/database";
import Divider from "@mui/material/Divider";
import { getDatabase, ref, set, get } from "firebase/database";
import {
  getAuth,
  sendPasswordResetEmail,
  verifyBeforeUpdateEmail,
} from "firebase/auth";

const style = {
  py: 0,
  width: "100%",
  borderRadius: 2,
  border: "none",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

function Account() {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  let [originalEmail, setOriginalEmail] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [firstName, setFirstName] = useState<string>("");
  let [lastName, setLastName] = useState<string>("");
  const db = getDatabase(app);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const setUp = async () => {
      if (user) {
        const userRef = ref(db, "users/" + user.uid);
        try {
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const data = snapshot.val();
            setFirstName(data.firstName);
            setLastName(data.lastName);
            if (user.email) {
              setEmail(user.email);
              setOriginalEmail(user.email);
            }
          }
        } catch (error: any) {
          const errorCode = error.code;
          const errorMessage = error.message;
        }
      }
    };
    setUp();
  }, [user]);

  const save = async () => {
    const currentUser = getAuth(app).currentUser;
    const auth = getAuth();

    //update profile
    if (auth.currentUser) {
      const user = auth.currentUser;
      try {
        await verifyBeforeUpdateEmail(user, email);
        await signOut(auth);
        window.location.reload();
        navigate("/");
        alert(
          "Check " +
            email +
            " for a verification email before signing in again."
        );
      } catch (error: any) {
        const errorMessage = error.message;
      }

      //update database
      const db = getDatabase(app);
      const userRef = ref(db, "users/" + user.uid);
      set(userRef, {
        firstName: firstName,
        lastName: lastName,
      });
    }
  };

  const passwordReset = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(
          "Check your email for instructions on how to change your password"
        );
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
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
                    width: "100%",
                    maxWidth: "min(80%, 300px)",
                    flex: "1 1 auto",
                    "& .MuiInputBase-input": { width: "100%" },
                  }}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
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
                    "& .MuiInputBase-input": { width: "100%" },
                  }}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  sx={{
                    marginBottom: "10px",
                    mr: "100px",
                    width: "100%",
                    maxWidth: "min(80%, 300px)",
                    flex: "1 1 auto",
                    "& .MuiInputBase-input": { width: "100%" },
                  }}
                />
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              size="medium"
              sx={{
                borderRadius: "25px",
                backgroundColor: "#013752",
                textTransform: "none",
                margin: "10px",
              }}
              onClick={passwordReset}
            >
              Reset Password
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              size="medium"
              sx={{
                borderRadius: "25px",
                backgroundColor: "#013752",
                textTransform: "none",
                margin: "10px",
              }}
              onClick={save}
            >
              Save
            </Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default transition(Account);
