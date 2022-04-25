import React from "react"
import { useCattleForSale } from "../hooks/use-cattle-sale-hook"
import { CattleCard } from "./card-component"
import { Grid } from "@mui/material"

import "../styles/cattle-sale.css"

export const CattleForSale = () => {
  const cattle = useCattleForSale()

  const renderCards = () => {
    return cattle.map((edge, index) => {
      return (
        <Grid item key={index} sm={12} md={6} lg={3} className={"card-container"}>
          <CattleCard
            title={edge.node.frontmatter.name}
            shortDescription={edge.node.frontmatter.shortDescription}
            linkTo={edge.node.frontmatter.slug}
          />
        </Grid>
      )
    })
  }

  return (
    <Grid container xs={12} className={"cattle-sale-container"}>
      {renderCards()}
    </Grid>
  )
}
