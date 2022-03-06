import React, { useState, useEffect } from 'react';
import classes from './main.module.css';
import Projects from '../projects/project';
import db from '../../firebase/firebase';
import { Badge } from 'react-bootstrap';

function Main() {
    const [header,setHeader]=useState('');
    const [ul,setUl]=useState('');
    const [li,setLi]=useState([]);
    const [exper,setExp]=useState([]);
    useEffect(() => {
      db.collection("Me").onSnapshot(snapshot=>{
        let docs=snapshot.docs;
        let temp=docs.map( doc => ({
          h1: doc.data().h1,
          uls: doc.data().ul,
          skils:doc.data().Skills
        }));
        setHeader(temp[0].h1)
        setUl(temp[0].uls);
        setLi(temp[0].skils);
            });


      db.collection("Experience").onSnapshot(snapshot=>{
        let docs=snapshot.docs;
        let temp=docs.map( doc => (doc.data().data));
        setExp(temp[0]);
            });


      }, []);
      
    
    //{li.map(item=><li>{item}</li>)}
    return (
     <div className={classes.all}>
        <div >
          <div className={classes.intro}>
            <div>
            <h1>{header}</h1>
              <ul>{ul}
              {li.map(item=><li>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
       <div className={classes.exp}>
          {exper.map(listitem=>(<Badge bg="success">{listitem }<p>{'\n'}</p></Badge>))}
       </div>
        <Projects />
     </div>

    );
    }

    export default Main;