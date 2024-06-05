import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function AnimalCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.larousse.fr/encyclopedie/data/images/1309507-El%C3%A9phant.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Elephant
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Les éléphants sont des mammifères proboscidiens de la famille des
          Éléphantidés. Ils correspondent aujourd'hui à trois espèces réparties
          en deux genres distincts.
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default AnimalCard;
