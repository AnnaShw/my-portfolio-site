import classes from "./Quote.module.css";

export default function Quote() {
  return (
    <div className={classes.animatedShadowQuote}>
      <blockquote>
        <p>
        A dream doesn’t become a reality through magic. It takes sweat, determination, and hard work.
        </p>
        <cite>Colin Powell</cite>
      </blockquote>
    </div>
  );
}
