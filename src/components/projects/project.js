import classes from './pr.module.css';
import React, { useState, useEffect } from 'react';
import db from '../../firebase/firebase';
import { Carousel } from 'react-bootstrap';


function Projects(props){
    const [projects,setPr]=useState([]);
     useEffect(()=>{
        db.collection("Projects").onSnapshot(snapshot=>{
            let docs=snapshot.docs;
            let temp=docs.map( doc => ([helpFunc(doc)]));
            setPr(temp);
          });
     },[])

     const helpFunc=(data)=> {
        let t=data.data().data;
        let pr={
         name:t[0],
        description:t[1],
         url:t[2]
        };
       return pr;
     };
     //            {projects.map(item=><Carousel.Caption>{item}</Carousel.Caption>)}

    return(
        <Carousel>
        </Carousel>
    )
}

export default Projects;