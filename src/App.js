import React from 'react';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css'


function App() {
  return (
    <div>
      <NavBar />
      <Home />  
      {/* <Footer /> */}
    </div>
  );
}

export default App;
