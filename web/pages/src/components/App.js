import React, { Component } from 'react';
import '../styles/App.css';

import Home from './HomeComponent';
import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import {
  Navbar,
  NavbarGroup,
  NavbarDivider,
  NavbarHeading,
  Button,
  Alignment } from "@blueprintjs/core";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>Pages</NavbarHeading>
              <NavbarDivider />
                <Link to="/books">
                  <Button className="pt-minimal" icon="home" text="Home" />
                </Link>
                <Button className="pt-minimal" icon="document" text="Files" />
            </NavbarGroup>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route path="/about" component={About} />
            <Route path="/hello" component={Hello} />
            <Route path="/books" component={Books} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
