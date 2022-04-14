import * as React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useAuthState } from "react-firebase-hooks/auth";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import { Link, useHistory } from "react-router-dom";
import TourIcon from "@mui/icons-material/Tour";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { auth } from "../firebase.js";
import "./styles/Navbar.css";

const pages = ["Home", "Travel", "Places", "About US", "Contact Us"];

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user] = useAuthState(auth);
  const history = useHistory();
  const signOut = () => {
    auth.signOut().then((auth) => {
      history.push("/");
    });
  };

  const handleAuthentication = () => {
    if (user) {
      if (window.confirm("Are you sure you want to log out?")) {
        signOut();
      }
    }
  };
  const handleAddUser = () => {
    history.push("/register");
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePlaces = () => {
    history.push("/myplaces");
    setAnchorEl(null);
  };
  const handleProfile = () => {
    history.push("/profile");
    setAnchorEl(null);
  };

  const handleMenuItems = (page) => {
    if (page === "Home") {
      history.push("/home");
      setTimeout(function () {
        document.getElementById("home").click();
      }, 100);
    }
    if (page === "Travel") {
      history.push("/home");
      setTimeout(function () {
        document.getElementById("linkBtn").click();
      }, 100);
    }
    if (page === "Places") {
      history.push("/places");
    }
    if (page === "Contact Us") {
      history.push("/");
      setTimeout(() => {
        document.getElementById("conBtn").click();
      }, 100);
    }
    if(page === "About US"){
      history.push("/");
      setTimeout(() => {
        document.getElementById("aboutBtn").click();
      }, 100);
    }
  };
  const returnLink = () => {
    if (!user) return "/login";
    else return "/";
  };
  const handleMouse = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.cursor = "";
  };
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#383434" }}>
      <a href="#" id="home"></a>
      <a href="#travel" id="linkBtn"></a>
      <a href="#contact" id="conBtn"></a>

      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" className="links">
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{
                fontFamily: "Impact, Charcoal, sans-serif",
                textDecoration: "underline",
              }}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Travellopedia
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <a href="#" style={{ textDecoration: "none" }}>
                <Button
                  key={page}
                  size="small"  
                  disableElevation
                  onClick={() => handleMenuItems(page)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    backgroundColor: "#383434",
                    ":hover": {
                      backgroundColor: "#383434",
                      color: "#4285F4",
                    },
                  }}
                >
                  {page}
                </Button>
              </a>
            ))}
          </Box>

          {!user ? (
            <Box>
              <Link to={returnLink} className="links">
                <Button
                  variant="contained"
                  // disableElevation
                  onClick={handleAuthentication}
                >
                  Sign In
                </Button>
              </Link>
            </Box>
          ) : null}
          {user && (
            <div>
              {user.displayName.split(" ")[0]}
              <IconButton
                size="large"
                style={{ marginLeft: 10 }}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {user?.photoURL ? (
                  <img src={user?.photoURL} className="userIcon" />
                ) : (
                  <AccountCircle />
                )}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>
                  <PersonIcon sx={{ marginRight: "10px" }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={handlePlaces}>
                  <TourIcon sx={{ marginRight: "10px" }} />
                  My Places
                </MenuItem>
                <MenuItem onClick={handleAddUser}>
                  <PersonAddIcon sx={{ marginRight: "10px" }} /> Add User
                </MenuItem>
                <MenuItem onClick={handleAuthentication}>
                  <LogoutIcon sx={{ marginRight: "10px" }} /> Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
