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
  linkTo,
  excerpt,
  featuredImage,
  htmlMarkup,
  cert,
  semen,
}) {
  return (
    <Card>
      {featuredImage && <Img className={'card-image'} fluid={featuredImage.childImageSharp.fluid} />}
      <CardContent className={'card-content'}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "-15px",
          }}
        >
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <div style={{ display: "flex", gap: ".5rem" }}>
            {semen && <Chip label={`Semen $${semen}`} color={"secondary"} />}
            {cert && <Chip label={`Certs $${cert}`} color={"info"} />}
          </div>
        </div>
        <Typography align="justify" dangerouslySetInnerHTML={{ __html: htmlMarkup }} />
      </CardContent>
      <CardActions>
        <Button
          style={{ width: "100%" }}
          onClick={() => navigate(linkTo)}
          variant={"contained"}
        >
          View on ABHA
        </Button>
      </CardActions>
    </Card>
  )
}
