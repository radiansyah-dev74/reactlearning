import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Jumbotron } from 'react-bootstrap';

function App() {
  return (

    <div className="App">

      <div>
        <Nav variant="pills" defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
        </Nav>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
  </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          gfhgf
        </h1>

        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="outline-primary">Primary</Button>{' '}
        <Button variant="success">Radiansyah</Button>{' '}
      </header>
    </div>
  );
}

export default App;
