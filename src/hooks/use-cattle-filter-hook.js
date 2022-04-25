const dataDictionary = {
  0: "all",
  1: "male",
  2: "female",
  3: "straws",
}

export const useCattleFilter = (cattle, tabValue, type) => {
  if (dataDictionary[tabValue] === "all") {
    return cattle.filter(edge => {
      return edge.node.frontmatter.sex && edge.node.frontmatter.type === type
    })
  }

  const cattleToSell = cattle.filter(edge => {
    return (
      edge.node.frontmatter.sex === dataDictionary[tabValue] &&
      edge.node.frontmatter.type === type
    )
  })

  return cattleToSell
}
