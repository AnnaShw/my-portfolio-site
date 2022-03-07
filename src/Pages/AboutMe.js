import React, { useState, useEffect } from "react";
import Card from '../components/Card/Card';
import db from "../firebase/firebase";
import classes from "../components/MainPage/main.module.css";
import ImageListComponent from "../components/ImageList/ImgList";
import Typography from '@mui/material/Typography';
import SocialNetworking from "../components/SocialNetworking/SocialNetworking";


export default function AboutMe(){
    const [header, setHeader] = useState("");
    const [ul, setUl] = useState("");

    useEffect(() => {
        db.collection("Me").onSnapshot((snapshot) => {
          let docs = snapshot.docs;
          let temp = docs.map((doc) => ({
            h1: doc.data().h1,
            uls: doc.data().ul,
          }));
          setHeader(temp[0].h1);
          setUl(temp[0].uls);
        });
    });

    return(
        <div className={classes.all}>
                <Card>
                    <h1>{header}</h1>
                    <ul>{ul}</ul>
                </Card>
                <Card className={classes.photos}>
                    <h1>Photo Gallery</h1>
                    <Typography align="center">I do believe that actions images speak louder than words. By looking at the pictures below, 
                        you can get a little grasp of what person I am outside of work.
                    </Typography>
                    <ImageListComponent/>
                    <SocialNetworking/>
                </Card>
        </div>
    );
}

