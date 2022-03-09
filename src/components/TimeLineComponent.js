import * as React from "react";
import { useState, useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import db from "../firebase/firebase";
import classes from "../components/MainPage/main.module.css";

export default function TimeLineComponent() {
  const [exper, setExp] = useState([]);
  useEffect(() => {
    db.collection("Experience").onSnapshot((snapshot) => {
      let docs = snapshot.docs;
      let temp = docs.map((doc) => doc.data().data);
      setExp(temp[0]);
    });
  }, []);

  return (
    <Timeline position="alternate" className={classes.workTimeLine}>
      {exper.map((event) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
            {" "}
            <TimelineContent >{event}</TimelineContent>{" "}
        </TimelineItem>
      ))}
    </Timeline>
  );
}
