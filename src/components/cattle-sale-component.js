import React from "react"
import { useCattleForSale } from "../hooks/use-cattle-sale-hook"

export const CattleForSale = () => {
  const cattle = useCattleForSale();

  return cattle.map((edge, index) => <div key={index}>{edge.node.frontmatter.name}</div>);
}
