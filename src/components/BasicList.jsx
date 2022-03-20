import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";

function BasicList(props) {
  const place = props.places;
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders ">
        <List>
          {place.map((item, index) => (
            <div className="">
              <ListItem button key={index}>
                <ListItemText primary={item} />
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
