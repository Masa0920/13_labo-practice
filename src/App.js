import React from 'react';
import Navbar from './screens/Navbar';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"
import Labo from "./screens/13Labo";
import Company from "./screens/Company"
import Contact from "./screens/Contact"
import News from "./screens/News"
import Reservation from "./screens/Reservation"
import Sponsors from "./screens/Sponsors"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" render={() => <Labo/>} />
        <Route exact path="/company" render={() => <Company/>} />
        <Route exact path="/contact" render={() => <Contact/>} />
        <Route exact path="/news" render={() => <News/>} />
        <Route exact path="/reservation" render={() => <Reservation/>} />
        <Route exact path="/sponsors" render={() => <Sponsors/>} />
      </Switch>
    </Router>
  );
}

export default App;
