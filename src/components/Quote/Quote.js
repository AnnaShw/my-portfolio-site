import classes from "./Quote.module.css";
import mount from "../../photos/mount.jpeg";

export default function Quote() {
  return (
    <div className={classes.animatedShadowQuote}>
      <img src={mount} alt="" className={classes.image} />
      <blockquote>
        <p>
          A dream doesn’t become a reality through magic. It takes sweat,
          determination, and hard work.
        </p>
        <cite>Colin Powell</cite>
      </blockquote>
    </div>
  );
}
