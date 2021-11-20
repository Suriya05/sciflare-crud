import React from 'react';
import { NavLink } from 'react-router-dom';
class Register extends React.Component {
  userData;
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
        name: '',
        password: ''
    }
}


 // Form Events
 handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}

// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('user',JSON.stringify(this.state));
  
   window.location.replace("/login")
   alert("registered")
}
componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem('user'));
 
    if (localStorage.getItem('user')) {
        this.setState({
            name: this.userData.name,
            password: this.userData.password
    })
} else {
    this.setState({
        name: '',
        password: ''
    })
}
}

  render() {
    return (
        <div className="container p-3">
            <h2 className="text-center">Register</h2>
        <form  onSubmit={this.handleFormSubmit}>
            <div className="form-group m-2">
                <label>Name</label>
                <input name="name" type="text"  onChange={this.handleChange} className="form-control" />
            </div>
            <div className="form-group m-2">
                <label>Password</label>
                <input name="password" type="password"  onChange={this.handleChange} className="form-control" />
            </div>
           
      
            <button type="submit" className="btn btn-primary btn-block m-2">Sign Up</button>
            <div className="">
                Already registered? Click here to
                <NavLink style={{textDecoration: "none"}} to="/login" exact> Login</NavLink>
            </div>
        </form>
    </div>
    )
  }
}

export default Register;
