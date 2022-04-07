import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Button, CardActionArea } from "@mui/material";

export default function ActionAreaCard({ text, image, heading }) {
  return (
    <CardActionArea>
      <Card sx={{ width: 300, height: 280 }}>
        <CardMedia component="img" height="140" image={image} alt={heading} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
            <Button>
              <StarBorderIcon sx={{ float: "right" }} />
            </Button>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
