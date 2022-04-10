import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { CardActionArea } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider.js";

export default function RecipeReviewCard({ id, text, image, heading }) {
  const [, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: heading,
        image: image,
        text: text,
      },
    });
  };

  const history = useHistory();
  return (
    <Card sx={{ width: 300, height: 400 }}>
      <CardActionArea
        onClick={() => history.push(`/places/${heading.toLowerCase()}`)}
      >
        <CardMedia component="img" height="170" image={image} alt={heading} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ overflow: "hidden", height: "100px" }}
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={addToCart}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
