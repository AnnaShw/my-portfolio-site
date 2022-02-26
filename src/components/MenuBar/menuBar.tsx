import React from 'react';
import classes from './menuBar.module.css';
import { Container, Navbar } from 'react-bootstrap';

function menuBar() {
    return (
      <Navbar bg="light" expand="lg" fixed='top'>
        <Container>
          <div className={classes.allMenuBar}>
            <Navbar.Brand className={classes.name}>AS</Navbar.Brand>
            <div className={classes.socialNetworks}>
              <Navbar.Brand href='https://www.linkedin.com/in/anna-shveynfurt/' className={classes.name}>LinkedIn</Navbar.Brand>
              <Navbar.Brand href='https://github.com/AnnaShw' className={classes.name}>GitHub</Navbar.Brand>
            </div>
          </div>
        </Container>
      </Navbar>
    );
    }

    export default menuBar;