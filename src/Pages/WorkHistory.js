import React, { useState, useEffect } from "react";
import db from "../firebase/firebase";
import Card from "../components/Card/Card";
import Projects from "../components/projects/project";
import TimeLineComponent from "../components/TimeLineComponent";
import MoonLoader from "react-spinners/ClipLoader";
import MyButton from "../components/MyButton/MyButton";
import Text from "../components/Text/Text";
import Typography from "@mui/material/Typography";
import Carousel from "react-elastic-carousel";
import classes from "../components/MainPage/main.module.css";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const styleH1 = {
  color: "white",
  fontsize: 20,
  textAlign: "center",
};

export default function WorkHistory() {
  const [profUl, setPUl] = useState("");
  const [li, setLi] = useState([]);
  const [studyOrgs, setStudyOrgs] = useState([]);
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

    db.collection("StudyOrgs").onSnapshot((snapshot) => {
      let docs = snapshot.docs;
      let temp1 = docs.map((doc) => [helpFunc(doc)]);
      setStudyOrgs(...studyOrgs, temp1);
    });
    setStudyOrgs(studyOrgs);
  }, []);

  const helpFunc = (data) => {
    let t = data.data();
    let oranization = {
      name: t.name,
      url: t.url,
    };
    return oranization;
  };

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
          <p className={classes.workH}>{profUl}</p>
          <Carousel itemsToShow={3}>
            {li.map((item) => (
              <Typography
                className={classes.item}
                variant="h5"
                component="div"
                key={Math.random()}
              >
                {" "}
                {item}
              </Typography>
            ))}
          </Carousel>

          <Card className={classes.photos}>
            <div style={styleH1}>
              {" "}
              <p>
                I try to get my knowledge from every source available to me,
                here are some of them:
              </p>
              <div className={classes.forButton}>
                {studyOrgs.map((current) => (
                  <MyButton
                    href={current[0].url}
                    out={true}
                    key={Math.random()}
                  >
                    {current[0].name}
                  </MyButton>
                ))}
              </div>
            </div>
          </Card>
          <Card>
            <TimeLineComponent />
            <Text>My project's:</Text>
          </Card>
          <Projects />
        </div>
      )}
    </div>
  );
}
