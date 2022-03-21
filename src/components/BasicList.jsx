import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
import "./styles/StatePage.css";
import { useHistory } from "react-router-dom";
function BasicList(props) {
  const history = useHistory();
  const handleListClick = (item) => {
    history.replace(`/places/${item.toLowerCase()}`);
  };
  const place = props.places;
  return (
    <Box sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders ">
        <List>
          <Divider />
          {place.map((item, index) => (
            <div className="" key={index}>
              <ListItem button onClick={() => handleListClick(item)}>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      style={{ fontSize: "22px", padding: "10px" }}
                    >
                      {item}
                    </Typography>
                  }
                />
                <ArrowForwardIosIcon />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </nav>
    </Box>
  );
}
export default BasicList;
