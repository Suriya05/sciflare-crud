import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends React.Component { 
    loginUserName 
    loginUserPassword 
    userData
    isLoggedin = JSON.parse(localStorage.getItem('loggedin'));
   

    // isLoggedin

    constructor(props) {
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.isLoggedin = JSON.parse(localStorage.getItem('loggedin'));
        
    
    }
    
 
   // Form Events
   handleFormSubmit(e) {
    e.preventDefault()
    this.loginUserName = e.target.name.value
    this.loginUserPassword = e.target.password.value

    if(this.userData){
        if(this.userData.name == this.loginUserName && this.userData.password == this.loginUserPassword){
            alert("Successfully logged in")
            localStorage.setItem('loggedin',JSON.stringify(true))
            window.location.replace("/")
            
        }
        else{
            alert("Incorrect details")
        }
    }
}

   
componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem('user'));
   
    // login validation
   
    
}

  render() {
    return (<>
  
        <div className="container p-3">
        <h2 className="text-center">Login</h2>
    <form  onSubmit={this.handleFormSubmit}>
        <div className="form-group m-2">
            <label>User Name</label>
            <input name="name" type="text"  className="form-control" />
        </div>
        <div className="form-group m-2">
            <label>Password</label>
            <input name="password" type="password" className="form-control" />
        </div>
       
        <button type="submit"  className="btn btn-primary btn-block m-2">Login</button>
        
        <div className="">
                New User? Click here to
                <NavLink style={{textDecoration: "none"}} to="/register" exact> Register</NavLink>
            </div>
    </form>
</div>
</>
    )
  }
}

export default Login;
