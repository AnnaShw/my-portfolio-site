import TypingDemo from "../TypingDemo/TypingDemo";
import Quote from "../Quote/Quote";
import MyButton from "../../components/MyButton/MyButton";
import classnames from "./main.module.css";

function Main() {
  return (
    <div className={classnames.thisDiv}>
      <TypingDemo />
      <div className={classnames.toWork}>
        <div className={classnames.all}>
          <p>
            Here you can find out more about the companies I've collaborated
            with, my projects and the technologies I can work with.
          </p>
          <MyButton href={"/workHistory"} out={false}>
            Check out my work history
          </MyButton>
        </div>
        <div className={classnames.pd}>
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
