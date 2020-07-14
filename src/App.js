import React from 'react';
import './App.css';
import Clock from './Clock.jsx';
import { Button, Navbar, Nav, Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import sample from './sample.mp4';
function App() {
  return (
    <div>
      <header className="App">
        <div className="background-video">
        <video autoPlay="autoPlay" loop="loop" muted>
        <source src={sample} />
        </video>
        </div>
        <div className="header-overlay navbar-content">
        <Navbar variant="dark" expand="lg" className="m-0 p-0">
    <Navbar.Brand href="#home" className="m-0 p-0"><div className="NavbarLogo ml-5"><img src={logo} className="img-responsive mt-2" alt="logo" width="90" height="138"/></div></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-right pr-2 links">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
        </div> 
      </header> 
      <Clock/> 
      </div> 
      
  );
}

export default App;
