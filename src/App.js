import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Error from './components/error';
import About from './components/About';
import Conatct from './components/Conatct';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  useEffect(()=>
  {
document.title="Home of the Original 21 Spice Biryani"
  });
  return (
    <Router>
      <>
        <Switch>
          <Route path="/menu" exact >
          <Navbar />
            <Menu custom_css="unset" display="none" title="Menu | Home of the Original 21 Spice Biryani"/>
          </Route>
          <Route path="/about" exact >
          <Navbar />
            <About title="About | Home of the Original 21 Spice Biryani" display="none"/>
          </Route>
          <Route path="/contact" exact >
          <Navbar />
            <Conatct title="Contact | Home of the Original 21 Spice Biryani"/>
          </Route>
          <Route path="/" exact>
          <Navbar />
          <Banner/>
          <Menu title="Home of the Original 21 Spice Biryani"/>
          <About/>
          </Route >
          <Route component={Error} />
        </Switch>
      </>
    </Router>
  );
}
export default App;
