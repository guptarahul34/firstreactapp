import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = ()=>{
    return(
        <>
         <div className="container-fluid nav_bg mt-3">
            <div className="row justify-content-center">
                    <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                              <a className="navbar-brand p-lg-1" href="rahulgupta">Rahul Gupta</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                    <NavLink exact activeClassName="active1" to="/" className="nav-link ">Home</NavLink>
                                    {/* <a className="nav-link active" href="/">Home</a> */}
                                    </li>
                                    <li className="nav-item">
                                    <NavLink exact activeClassName="active1" to="/about" className="nav-link ">About Us</NavLink>
                                    {/* <a className="nav-link" href="/about">About Us</a> */}
                                    </li>
                                    <li className="nav-item">
                                    <NavLink exact activeClassName="active1" to="/contact" className="nav-link ">Contact Us</NavLink>
                                    {/* <a className="nav-link" href="/contact">Contact Us</a> */}
                                    </li>
                                    <li className="nav-item">
                                    <NavLink exact activeClassName="active1" to="/service" className="nav-link ">Service</NavLink>
                                    {/* <a className="nav-link" href="/service">Service</a> */}
                                    </li>
                                 </ul>
                             </div>
                         </div>
                 </nav>
            </div>
        </div>
        </div>
        </>
    );
}

export default Menu;