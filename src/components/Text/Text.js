import classes from "./Text.module.css";

export default function Text(props) {
  let rendOut = props.out;
  return <div className={classes.text}>{props.children}</div>;
}
