import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"
import { navigate } from "gatsby";

import '../styles/card.css';

export function CattleCard({title, shortDescription, linkTo}) {
  const randomNumber = Math.floor(Math.random() * 100);

  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        className="card-image"
        image={`https://picsum.photos/500/500?images=${randomNumber}`}
      />
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={() => navigate(linkTo)} >Learn More</Button>
      </CardActions>
    </Card>
  )
}
