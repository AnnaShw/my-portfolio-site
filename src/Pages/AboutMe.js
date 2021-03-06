import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import db from "../firebase/firebase";
import ImageListComponent from "../components/ImageList/ImgList";
import Typography from "@mui/material/Typography";
import MoonLoader from "react-spinners/ClipLoader";
import Text from "../components/Text/Text";
import classes from "../components/MainPage/main.module.css";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function AboutMe() {
  const [header, setHeader] = useState("");
  const [ul, setUl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("Me").onSnapshot((snapshot) => {
      let docs = snapshot.docs;
      let temp = docs.map((doc) => ({
        h1: doc.data().h1,
        uls: doc.data().ul,
      }));
      setHeader(temp[0].h1);
      setUl(temp[0].uls);
      setLoading(false);
    });
  });

  return (
    <div className={classes.all}>
      {loading ? (
        <div style={style}>
          <MoonLoader color="#B8E986" loading={loading} size={70} />
        </div>
      ) : (
        <div>
          <Card>
            <Text>{header}</Text>
            <p className={classes.item}>{ul}</p>
          </Card>
          <Card className={classes.photos}>
            <Text>Photo Gallery</Text>
            <div className={classes.workTimeLine}>
              <Typography align="center" variant="h5">
                I do believe that actions images speak louder than words. By
                looking at the pictures below, you can get a little grasp of
                what person I am outside of work.
              </Typography>
            </div>
            <ImageListComponent />
          </Card>
        </div>
      )}
    </div>
  );
}
