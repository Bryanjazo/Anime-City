import React from 'react'
import Home from './Components/Home.js'
import {BrowserRouter as Router} from "react-router-dom";
import navBar from './Components/Navbar.js'
import {
  Container,
  Header,
  Content,
  Footer,
  Sidebar,
  Navbar,
  Nav,
  Icon,
  Dropdown
} from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";


function App() {
  return (
    <div className="App">
  <Container className="navbar">
    <Header>
      <Navbar >
        <Navbar.Body>
          <Nav>
            <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
            <Nav.Item>News</Nav.Item>
            <Nav.Item>Products</Nav.Item>
            <Dropdown title="About">
              <Dropdown.Item>Company</Dropdown.Item>
              <Dropdown.Item>Team</Dropdown.Item>
            </Dropdown>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Header>

  </Container>

    <Router path='/'>
        <Home />
    </Router>
    </div>
  );
}

export default App;
