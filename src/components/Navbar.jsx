import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useAuthState } from "react-firebase-hooks/auth";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import { Link, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { auth } from "../firebase.js";
import "./styles/Navbar.css";
import { Alert } from "@mui/material";

const pages = ["Home", "Travel", "About US", "COntact Us"];

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user] = useAuthState(auth);
  const history = useHistory();
  const handleAuthentication = () => {
    if (user) {
      if (window.confirm("Are you sure you want to sign out?"))
        auth.signOut().then((auth) => {
          history.push("/");
        });
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAccount = () => {
    console.log("Account");
    setAnchorEl(null);
  };
  const handleProfile = () => {
    console.log("Profile");
    history.push("/profile");
    setAnchorEl(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
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
  };
  const returnLink = () => {
    if (!user) return "/login";
    else return "/";
  };
  return (
    <AppBar position="sticky">
      <a href="#" id="home"></a>
      <a href="#travel" id="linkBtn"></a>
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
              Tourism
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                size="small"
                variant="contained"
                disableElevation
                onClick={() => handleMenuItems(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            <Link to={returnLink} className="links">
              <Button
                variant="contained"
                disableElevation
                onClick={handleAuthentication}
              >
                {user ? "Sign Out" : "Sign In"}
              </Button>
            </Link>
          </Box>
          {user && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} className="userIcon" />
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
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleAccount}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
