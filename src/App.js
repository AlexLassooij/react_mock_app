import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./styles.css";

// Importing components
import Footer from './components/Footer';       // Ricky
import Bio from './components/Bio';             // Grant Ricky Colin
import Navbar from './components/Navbar';       // Colin
import AboutUs from "./components/AboutUs"      // Alex & Mathew
import Home from "./components/Home"            // Grant, Ricky
import login from "./components/login";         // Kaiyuan
import Signup from "./components/Signup";       // Eros
import ErrorPage from './components/Error'      // Colin
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>  {/*sticky navbar through all pages. Not included within switch. */}
        <Switch>  
          <Route path = '/' exact component = {Home} />
          <Route path = '/aboutus' exact component={AboutUs} />
          <Route path = '/login' exact component={login}/>
          {/* <Route path="/signup" exact component={Signup} /> */}
          <Route path="/photogallery" exact component={PhotoGallery} />
          <Route path="*" exact component={ErrorPage} >
          </Route>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
