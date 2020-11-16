import React, { Component } from 'react'
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Top from "./components/Top/Top.jsx";
import Footer from './components/Footer/Footer.jsx';
import Home from "./pages/Home.jsx";
import Promotion from "./pages/Promotion.jsx";
import Magazine from "./pages/Magazine.jsx";
import Estimate from "./pages/Estimate.jsx";
import EstimateProcess from "./pages/EstimateProcess.jsx";
import Service from "./pages/Service.jsx";
import Profile from "./pages/Profile.jsx";
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import EstimateHome from './pages/EstimateHome';


class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Top/>
          <Nav/>

          <Switch>
            <Route exact path={["/", "/home"]}><Home/></Route>
            <Route path="/promotion"><Promotion/></Route>
            <Route path="/magazine"><Magazine/></Route>
            <Route path="/estimate"><Estimate/></Route>
            <Route path="/service"><Service/></Route>
            <Route path="/profile"><Profile/></Route>
          </Switch>

          <Footer/>
        </BrowserRouter>
    </div>
    )
  }
}

export default App
