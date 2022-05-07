import React, { useState, useEffect } from "react";
import db from "../../firebase/firebase";
import LinkIcon from "@mui/icons-material/Link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Carousel from "react-elastic-carousel";
import classes from "./pr.module.css";

/*
 */

function Projects() {
  const [projects, setPr] = useState([]);

  useEffect(() => {
    db.collection("Projects").onSnapshot((snapshot) => {
      let docs = snapshot.docs;
      let temp = docs.map((doc) => [helpFunc(doc)]);
      setPr(temp);
    });
  }, []);

  const helpFunc = (data) => {
    let t = data.data().data;
    let pr = {
      name: t[0],
      url: t[1],
    };
    return pr;
  };

  return (
    <Carousel itemsToShow={2}>
      {projects.map((oneProject) => (
        <div className={classes.divC} key={Math.random()}>
          <Typography
            variant="h4"
            component="div"
            sx={{ m: 2.1 }}
            key={Math.random()}
            className={classes.name}
          >
            {" "}
            {oneProject[0].name}
          </Typography>
          <Button href={oneProject[0].url} key={Math.random()}>
            <Typography className={classes.visit} variant="h6" key={Math.random()}>
              <LinkIcon />
              {" Visit game site"}
            </Typography>
          </Button>
        </div>
      ))}
    </Carousel>
  );
}

export default Projects;
