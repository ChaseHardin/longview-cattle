import React from "react"
import { CattleCard } from "./card-component"
import { Grid, Tabs, Tab, Box } from "@mui/material"
import { styled } from "@mui/material/styles";

import { useCattleFilter } from "../hooks/use-cattle-filter-hook"
import { useCattleForSale } from "../hooks/use-cattle-sale-hook"
import "../styles/cattle-sale.css"

export const CattleForSale = () => {
  const [tabValue, setTabValue] = React.useState(0)

  const cattle = useCattleForSale()
  const filteredCattle = useCattleFilter(cattle, tabValue);

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

  const handleTabsChange = (_, newValue) => setTabValue(newValue)

  const StyledTabs = styled(Tabs)({
    "& .MuiTabs-indicator": {
      backgroundColor: "#4A955C"
    }
  });

  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: "#4A955C"
    }
  });

  return (
    <>
      <Box xs={{ borderBottom: 1, borderColor: "divider" }} className="tabs">
        <StyledTabs onChange={handleTabsChange} value={tabValue}>
          <StyledTab label="All Cattle" id={0} />
          <StyledTab label="Bulls" id={1} />
          <StyledTab label="Females" id={2} />
        </StyledTabs>
      </Box>
      <Grid container className={"cattle-sale-container"}>
        {renderCards()}
      </Grid>
    </>
  )
}
