import React from "react"
import { CattleCard } from "./card-component"
import { Grid, Tabs, Tab, Box } from "@mui/material"
import { useCattleFilter } from "../hooks/use-cattle-filter-hook"
import { useCattleForSale } from "../hooks/use-cattle-sale-hook"

import "../styles/cattle-sale.css"

export const CattleContainer = ({ type }) => {
  const [tabValue, setTabValue] = React.useState(0)

  const cattle = useCattleForSale()
  const filteredCattle = useCattleFilter(cattle, tabValue, type)
  
  const handleTabsChange = (_, newValue) => setTabValue(newValue)

  const renderCards = () => {
    return filteredCattle.map((edge, index) => {
      return (
        <Grid
          item
          key={index}
          sm={12}
          md={6}
          lg={3}
          className={"card-container"}
        >
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
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="tabs">
        <Tabs onChange={handleTabsChange} value={tabValue}>
          <Tab label="All Cattle" id={0} />
          <Tab label="Bulls" id={1} />
          <Tab label="Females" id={2} />
        </Tabs>
      </Box>
      <Grid container className={"cattle-sale-container"}>
        {renderCards()}
      </Grid>
    </>
  )
}
