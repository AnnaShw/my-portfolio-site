import React, { useState, useEffect } from "react";
import db from "../../firebase/firebase";
import LinkIcon from "@mui/icons-material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import classes from "./pr.module.css";

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
    <div className={classes.divC}>
      {projects.map((oneProject) => (
        <Box
          className={classes.fortext}
          sx={{ my: 3, mx: 2 }}
          key={Math.random()}
        >
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography variant="h4" component="div">
                {" "}
                {oneProject[0].name}
              </Typography>
            </Grid>
          </Grid>
          <Button href={oneProject[0].url}>
            <LinkIcon /> Visit game site
          </Button>
        </Box>
      ))}
    </div>
  );
}

export default Projects;
/*
{projects.map((oneProject) => (
        
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">{oneProject[0]}</Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">{oneProject[2]}</Typography>
          </Box>
          <Divider variant="middle" />
          <Typography gu tterBottom variant="body1">{oneProject[1]}</Typography>
        </Box>
      ))}
*/
