import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {Route,Redirect, Switch } from 'react-router-dom';
import Service from './Service';
import Footer from './Footer';

const App = ()=>{
    return(
        <>
        <Menu/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/service" component={Service}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route>
                    <Redirect to="/"></Redirect>
                </Route>
            </Switch>
            <Footer/>
            {/* <h1 className="text-center">my name App</h1> */}
        </>
    );
}

export default App;