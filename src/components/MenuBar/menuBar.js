import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import BackgroundLetterAvatars from "../../components/Avatar";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
  },
  navlinks: {
    display: "flex",
    flex:"1",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    display: "flex",
    flex: "2",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "12px",
  },
  logo: {
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function MenuBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <div className={classes.title}>
          <BackgroundLetterAvatars currentStr={"Anna Shveynfurt"} />
          <Typography variant="h4" className={classes.logo}>
            Anna Shveynfurt
          </Typography>
        </div>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About Me
          </Link>
          <Link to="/workHistory" className={classes.link}>
            Work
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default MenuBar;
