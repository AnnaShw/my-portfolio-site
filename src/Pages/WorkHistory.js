import db from "../firebase/firebase";
import Card from "../components/Card/Card";
import React, { useState, useEffect } from "react";
import Projects from "../components/projects/project";
import classes from "../components/MainPage/main.module.css";
import TimeLineComponent from "../components/TimeLineComponent";

export default function WorkHistory() {
  const [profUl, setPUl] = useState("");
  const [li, setLi] = useState([]);

  useEffect(() => {
    db.collection("Me").onSnapshot((snapshot) => {
      let docs = snapshot.docs;
      let temp = docs.map((doc) => ({
        profUls: doc.data().profUl,
        skils: doc.data().Skills,
      }));
      setPUl(temp[0].profUls);
      setLi(temp[0].skils);
    });
  }, []);

  return (
    <div>
      <Card>
        <ul className={classes.workH}>
          {profUl}
          {li.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Card>
      <Card><TimeLineComponent/></Card>
      <Projects />
    </div>
  );
}
