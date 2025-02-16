import React, { useState, useEffect } from 'react'
import Login from './comps/Login'
import Home from './comps/Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Signup from './comps/Signup'
import Nav from "./comps/Nav"
import HostelSpace from './comps/HostelSpace'
import Dashboard from './comps/Dashboard'
import { auth, db } from './Firebaseset'
import Aboutus from './comps/Aboutus'
import Verifyemail from './comps/Verifyemail'
import Contactus from './comps/Contactus'
import './app.css'
import MainFooter from './comps/MainFooter'

import { connect } from 'react-redux'
import e from 'cors'





const App = ({ auth, emailVerified, profile}) => {

  let links;

  if (auth.uid != null && !emailVerified) {

      return (
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path='/Verifyemail' component={Verifyemail}>
              <Verifyemail />
            </Route>
            <Route exact path="/Home">
            <Home />
          </Route>
          </Switch>
        </BrowserRouter>
      )
  }
  else {

    if(profile.role == 'admin' | profile.role == 'cleaning' | profile.role == 'laundry'){

      links = <><Nav />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
      <Route path="/Dashboard">
        <Dashboard />
      </Route>
      <Route path="/Aboutus">
        <Aboutus />
      </Route>
      <Route path="/Contactus">
        <Contactus />
      </Route>
      <Route exact path='/Verifyemail' component={Verifyemail}>
          <Verifyemail />
        </Route>
    </Switch>
    </>
      
    }
    else{

      links= <><Nav />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
      <Route path="/HostelSpace">
        <HostelSpace />
      </Route>
      <Route path="/Dashboard">
        <Dashboard />
      </Route>
      <Route path="/Aboutus">
        <Aboutus />
      </Route>
      <Route path="/Contactus">
        <Contactus />
      </Route>
      <Route exact path='/Verifyemail' component={Verifyemail}>
          <Verifyemail />
        </Route>
    </Switch>
    </>
    }
    
    return (
      <BrowserRouter>
        
        {links}
        <MainFooter />
      </BrowserRouter>
    )
    // return (
    //   <BrowserRouter>
    //     <Nav />
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route exact path="/Home">
    //         <Home />
    //       </Route>
    //       <Route path="/Login">
    //         <Login />
    //       </Route>
    //       <Route path="/Signup">
    //         <Signup />
    //       </Route>
    //       <Route path="/HostelSpace">
    //         <HostelSpace />
    //       </Route>
    //       <Route path="/Dashboard">
    //         <Dashboard />
    //       </Route>
    //       <Route path="/Aboutus">
    //         <Aboutus />
    //       </Route>
    //       <Route path="/Contactus">
    //         <Contactus />
    //       </Route>
    //       <Route exact path='/Verifyemail' component={Verifyemail}>
    //           <Verifyemail />
    //         </Route>
    //     </Switch>
    //     <MainFooter />
    //   </BrowserRouter>
    // )

  }


}



const mapStateToProps = (state) => ({

  auth: state.firebase.auth,

  //loggedIn: state.firebase.auth.uid,
  emailVerified: state.firebase.auth.emailVerified,

  profile: state.firebase.profile,



})

export default connect(mapStateToProps)(App);