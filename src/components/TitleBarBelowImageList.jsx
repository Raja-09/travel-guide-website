import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useHistory } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
import { Tooltip } from "@mui/material";

export default function TitlebarBelowImageList({ itemData }) {
  const history = useHistory();
  const handleListClick = (item) => {
    history.replace(`/places/${item.toLowerCase()}`);
  };
  return (
    <ImageList sx={{ width: "50%" }}>
      {itemData.map((item) => (
        <span onClick={() => handleListClick(item.name)} className="imageList" sx={{width:"10px"}}>
          <Tooltip title ={"Go to "+item.name}>
            <ImageListItem
              key={item.image}
              sx= {{":hover":{boxShadow:"0px 0px 10px #000000"}}}
            >
              <img
                src={`${item.image}?w=248&fit=crop&auto=format`}
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.name}
                subtitle={<span> {item.desc}</span>}
                position="bottom"
              />
            </ImageListItem>
          </Tooltip>
        </span>
      ))}
    </ImageList>
  );
}
