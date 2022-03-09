import React, { useState, useEffect } from "react";
import classes from "../components/MainPage/main.module.css";
import db from "../firebase/firebase";
import Card from "../components/Card/Card";
import Projects from "../components/projects/project";
import TimeLineComponent from "../components/TimeLineComponent";
import MoonLoader from "react-spinners/ClipLoader";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function WorkHistory() {
  const [profUl, setPUl] = useState("");
  const [li, setLi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("Me").onSnapshot((snapshot) => {
      let docs = snapshot.docs;
      let temp = docs.map((doc) => ({
        profUls: doc.data().profUl,
        skils: doc.data().Skills,
      }));
      setPUl(temp[0].profUls);
      setLi(temp[0].skils);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div style={style}>
          <MoonLoader
            color="#B8E986"
            className={classes.root}
            loading={loading}
            size={70}
          />
        </div>
      ) : (
        <div>
          <Card>
            <ul className={classes.workH}>
              {profUl}
              {li.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <TimeLineComponent />
          </Card>
          <Projects />
        </div>
      )}
    </div>
  );
}
