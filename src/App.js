
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import Noutfound from './components/Notfound/Noutfound';
import Home from './components/Home/Home';



import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Privateroute from "./components/Privateroute/Privateroute";
import AuthProvider from "./context/AuthProvider";
import ManageOrder from "./components/MyOrder/MyOrder";
import MyOrder from "./components/MyOrder/MyOrder";
import Manageorder from "./components/Manageorder/Manageorder";
import Aboutus from "./components/Aboutus/Aboutus";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/about'>
              <Aboutus></Aboutus>
            </Route>
            <Privateroute exact path='/myOrder'>
              <MyOrder></MyOrder>
            </Privateroute>
            <Privateroute exact path='/manageOrder'>
              <Manageorder></Manageorder>
            </Privateroute>
            <Privateroute path='/service/:id'>
              <PlaceOrder></PlaceOrder>
            </Privateroute>
            <Route path='*'>
              <Noutfound></Noutfound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
