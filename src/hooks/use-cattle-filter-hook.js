const dataDictionary = {
  0: "all",
  1: "male",
  2: "female",
  3: "straws",
}

export const useCattleFilter = (cattle, tabValue) => {
  if (dataDictionary[tabValue] === "all") {
    return cattle.filter(edge => {
      return edge.node.frontmatter.sex && edge.node.frontmatter.type === "sale"
    })
  }

  const cattleToSell = cattle.filter(edge => {
    return (
      edge.node.frontmatter.sex === dataDictionary[tabValue] &&
      edge.node.frontmatter.type === "sale"
    )
  })

  return cattleToSell
}
