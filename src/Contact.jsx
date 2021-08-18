import React, { useState } from 'react';

const Contact = ()=>{
    const [data,setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:''
    });
    const Form_handing = (event)=>{
        const {name,value} = event.target;
            // console.log(name);
            // console.log(value);
            setData((preValue)=>{
                return {
                    ...preValue,
                    [name]:value,
                }
            })
    }
    const Form_submit = (event)=>{
        event.preventDefault();
        alert(
            `my name is ${data.fullname} and phone is ${data.phone} and email = ${data.email} and message is = ${data.msg}`
        )
       
    }
    
    return(
        <>
          <div className="container">
          <form onSubmit={Form_submit}>
              <div className="form">
                  <div className="row justify-content-center my-3 ">
                      <div className="col-lg-4 ">
                        <div className="form-group">
                            <label For="full_name" className="mb-1">Full Name</label>
                            <input 
                            required
                            autoComplete="off"
                            onChange={Form_handing} 
                            type="text" 
                            name="fullname" 
                            className="form-control col-lg-6" 
                            id="full_name"
                            value={data.fullname}
                            />
                        </div>
                      </div>
                  </div>
                  <div className="row justify-content-center my-3">
                      <div className="col-lg-4 ">
                        <div className="form-group">
                            <label For="mobile" className="mb-1">Phone</label>
                            <input 
                            onChange={Form_handing} 
                            type="number" 
                            name="phone" 
                            className="form-control col-lg-6" 
                            id="mobile"
                            value={data.phone}
                            />
                        </div>
                      </div>
                  </div>
                  <div className="row justify-content-center my-3">
                      <div className="col-lg-4 ">
                        <div className="form-group">
                            <label For="email" className="mb-1">Email</label>
                            <input 
                            onChange={Form_handing} 
                            type="email" name="email" 
                            className="form-control col-lg-6" 
                            id="email"
                            name="email" 
                            autoComplete="off"
                            value={data.email}
                            />
                        </div>
                      </div>
                  </div>
                  <div className="row justify-content-center my-3">
                      <div className="col-lg-4 ">
                        <div className="form-group">
                            <label For="textarea" className="mb-1">Message</label>
                            <textarea 
                            onChange={Form_handing} 
                            name="msg" id="textarea" 
                            className="form-control col-lg-6" 
                            placeholder="Awesome"
                            value={data.msg}
                            ></textarea>
                        </div>
                      </div>
                  </div>
                  <div className="row justify-content-center ">
                      <div className="col-lg-4 ">
                        <div className="form-group">
                           <button type="submit" className="btn btn-outline-success" >Submit Form</button>
                        </div>
                      </div>
                  </div>
              </div>
              </form>
          </div>
        </>
    );
}

export default Contact;