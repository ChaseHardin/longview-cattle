import React from "react"
import { ThingsWeOffer } from "../components/things-we-offer-component"
import { AppRenderer } from "../components/app-renderer-component"
import { Box } from "@mui/material"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"

import workingDog from "../images/working-dog.jpg"
import theView from "../images/view.jpg"
import calf from "../images/calf.jpg"
import dots from "../images/dots.jpg"
import cattle from "../images/cattle.jpg"
import fog from "../images/fog.jpg"

const itemData = [
  {
    img: theView,
    title: "The view",
  },
  {
    img: workingDog,
    title: "Working dog",
  },
  {
    img: calf,
    title: "Calf",
  },
  {
    img: dots,
    title: "Dots",
  },
  {
    img: cattle,
    title: "Cattle",
  },
  {
    img: fog,
    title: "Foggy morning",
  },
]

export default function Home() {
  return (
    <AppRenderer>
      <div id="banner-image"></div>
      <ThingsWeOffer />
      <Box display={"flex"} justifyContent={"center"}>
        <ImageList
          sx={{ width: "90%", height: 600 }}
          cols={3}
          col
          rowHeight={500}
        >
          {itemData.map(item => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </AppRenderer>
  )
}
