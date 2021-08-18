import React from 'react'
import img from './img/first.png';
import { NavLink } from 'react-router-dom';

const Contactpage = (props) => {
    return (
        <>
             <div className="container">
                    <div className="row row-margin">
                        <div className="col-lg-6 order-1 col-md-12 mb-2">
                            <h1 className="text-capitalize">{props.title}</h1>
                            <p className="text-capitalize">we are the team of talented developer making website. </p>
                            {/* <a className="btn btn-outline-success button text-capitalize">{props.button}</a> */}
                            <NavLink to={props.visit} className="btn btn-outline-success button text-capitalize" activeClassName="active1">{props.button}</NavLink>
                        </div>
                        <div className="col-lg-6 order-2 col-md-12">
                            <img src={img} alt="rando img" width="400" height="250" className="image_animation"/>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Contactpage;

