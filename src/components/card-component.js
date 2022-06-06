import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { navigate } from "gatsby";
import Img from "gatsby-image"

import '../styles/card.css';
import { Chip } from "@mui/material"

export function CattleCard({
  title,
  shortDescription,
  linkTo,
  excerpt,
  featuredImage,
  htmlMarkup,
  cert,
  semen
}) {
  return (
    <Card>
      {featuredImage && <Img fluid={featuredImage.childImageSharp.fluid} />}
      <CardContent className="card-content">
        <div style={{display: 'flex', gap: '.5rem'}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Chip label={`Semen $${semen}`} color={'primary'} />
          <Chip label={`Certs $${cert}`} color={'secondary'} />
        </div>
        <Typography
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: htmlMarkup }}
        />
      </CardContent>
      <CardActions>
        <Button
          style={{ width: "100%" }}
          size={"large"}
          onClick={() => navigate(linkTo)}
          variant={"contained"}
        >
          View EPD
        </Button>
      </CardActions>
    </Card>
  )
}
