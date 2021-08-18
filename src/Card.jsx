import React from 'react'
import Data from './Data';


const Card = () => {
    return (
        <>
           <div className="container">
               <div className="row">
               {
                Data.map((currentElement,index)=>{
                    {/* const {id,title,image,text} = currentElement; */}
                    return(
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5" key={index}>
                       <div className="card border-0">
                           <img src={currentElement.image} alt="random image" width="200" height="200" className="card-img"/>
                            <div className="card-body">
                                <h2 className="card-title">{currentElement.title}</h2>
                                <p className="card-text">{currentElement.text}</p>
                                <a href={currentElement.visit} className="btn btn-primary">Read More</a>
                            </div>
                       </div>
                   </div>
                   )
                })
               }
                   
               </div>
           </div> 
        </>
    )
}

export default Card;
