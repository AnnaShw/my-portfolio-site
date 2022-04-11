import TypingDemo from "../TypingDemo/TypingDemo";
import Quote from "../Quote/Quote";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import MyButton from "../../components/MyButton/MyButton";
import classnames from "./main.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
  },
  link: {
    textDecoration: "none",
    border: "1px solid white",
    padding: "10px",
    color: "white",
    fontSize: "20px",
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div>
      <TypingDemo />
      <div className={classnames.toWork}>
        <div>
          <p>
            Here you can find out more about the companies I've collaborated
            with, my projects and the technologies I can work with.
          </p>
          <MyButton href={"/workHistory"} out={false}>
            Check out my work history
          </MyButton>
        </div>
        <div>
          <p>I belive that:</p>
          <Quote />
        </div>
        <div>
          <p>Here you can find out more about me & my hobbies.</p>
          <MyButton href={"/about"} out={false}>
            Get to know me
          </MyButton>
        </div>
      </div>
    </div>
  );
}

export default Main;
