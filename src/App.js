import React from 'react';
import './App.css';
import { Button, Navbar, Nav, Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <Navbar variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
  <br />
    </div>
        
  );
}

export default App;
