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
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
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
        <BackgroundLetterAvatars currentStr={"Anna Shveynfurt"} />
        <Typography variant="h4" className={classes.logo}>
          Anna Shveynfurt
        </Typography>
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
