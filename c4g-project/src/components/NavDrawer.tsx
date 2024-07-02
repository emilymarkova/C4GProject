import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import "./NavDrawer.css";

export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250,backgroundColor: "#01496D" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="nav-list"
    >
      <List>
        {["Home", "Calendar"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <HomeIcon sx={{ color: "white" }} />
                ) : (
                  <CalendarTodayIcon sx={{ color: "white" }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          sm: "flex",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Button onClick={toggleDrawer(true)} className="menu-icon">
        <MenuIcon sx={{ color: "white", fontSize: 45 }} />
      </Button>
      <Drawer
        open={open}
        anchor={'right'}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#01496D" } }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
