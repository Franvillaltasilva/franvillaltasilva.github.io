import "./App.css";
import React from "react";
import WorkInProgress from "./pages/WorkInProgress/WorkInProgress";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Route
          render={({ location }) => (
            <>
              <Header />
              <TransitionGroup>
                <CSSTransition
                  appear={true}
                  key={location.key}
                  timeout={{ enter: 400, exit: 200 }}
                  classNames="fade"
                >
                  <Switch key={location.key} location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </>
          )}
        />
      </Router>
    </>
  );
}

export default App;
