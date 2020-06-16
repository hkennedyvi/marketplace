import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Home />
          </Route>
          <Route exact path="/profile">
            <NavBar />
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
