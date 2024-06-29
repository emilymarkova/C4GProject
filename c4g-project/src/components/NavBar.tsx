import React from 'react';
import { Typography } from '@mui/material';
import icon from '../images/icon.png';
import placeholderName from '../images/placeholder_name.png';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import NavDrawer from './NavDrawer';
import { Link as RouterLink } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
	return <Box className="nav" >
		<NavDrawer/>
		<Button disableRipple className="logo" sx={{
			padding: "3px",
			width: {
				xs: "100px",
				sm: "100px",
				md: "120px",
				lg: "140px",
				xl: "160px",
			},
		}}><img src={placeholderName} alt="Name" style={{width: "100%", height: "auto", padding: "3px", maxWidth: "160px" }}></img></Button>
		<ButtonGroup
          style={{
            border: "none",
            borderRadius: "5px",
            overflow: "hidden",
			}}
			className="nav-group"
        >
			<Button disableRipple className="nav-button"><p className="navbar-text">Home</p></Button>
				<Button disableRipple className="nav-button"><p className="navbar-text">Calendar</p></Button>
			<Button disableRipple sx={{ padding: "3px",
		width: {
			xs: "40px",
			sm: "40px",
			md: "40px",
			lg: "50px",
			xl: "60px",
		},
			}}><img src={icon} className="profile-pic" alt="Profile"></img></Button>
		</ButtonGroup >
		</Box>
			
}