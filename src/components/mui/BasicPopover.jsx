import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";


import { Button, Icon, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";

export default function BasicPopover({text,html}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  setTimeout(() => {
    setAnchorEl(null);
  }, 500);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Icon
        aria-describedby={id}
        onClick={handleClick}
        >
    
        <FavoriteIcon 
        />
      </Icon>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 1000, left: 651 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>{text}</Typography>
      </Popover>
    </div>
  );
}
