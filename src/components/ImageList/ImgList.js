import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import im1 from "../../photos/1.jpeg";
import im2 from "../../photos/2.jpeg";
import im3 from "../../photos/3.jpeg";

export default function ImageListComponent() {
  return (
    <ImageList
      sx={{ width: "auto", height: "auto" }}
      cols={3}
      rowHeight={"auto"}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            alt=""
            srcSet={`${item.img}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: im2,
  },
  {
    img: im3,
  },
  {
    img: im1,
  },
];
