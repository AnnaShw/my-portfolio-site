import classes from "./Text.module.css";

export default function Text(props) {
  return <div className={classes.text}>{props.children}</div>;
}
