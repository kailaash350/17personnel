import { Link} from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {hostMachine} from './Appconstant'


const RegistertoUs = props => {

    useEffect(() => {
     }, []);
    

    const [state, setState] = useState({
        fullName: "",
        email:"",
        password: "",
        wait: false,
        result:"" 
      },[]);
 
  

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
};
const handleSubmit = (e) => {
    e.preventDefault();
    setState({wait:true})
    axios.post(hostMachine+'/api/register', {
        fullname: state.fullName,
        email:state.email,
        password: state.password,
      })
      .then(function (response) {
        if(response.status === 200)
        setState({email:"",fullName:"",password:"", wait:false})
      })
      .catch(function (error) {
        console.log(error);
      });
    return(props.history.push("/login"));
    
  }
    return (
        <div className="container">
        <div className="logo">Register to 17 Foley Street</div>
        <div className="login-item">
            <form className="form-login" onSubmit={handleSubmit}>
                <div className="form-field">
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        value={state.email} onChange={handleChange}
                        variant="outlined"
                        name = "email"
                    />
                </div>
                <div className="form-field">
                    <TextField
                        required
                        id="outlined-required"
                        label="Full Name"
                        value={state.fullName} onChange={handleChange}
                        variant="outlined"  name = "fullName"
                    />
                </div>
                <div className="form-field">
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        variant="outlined" type="password"
                        value={state.password} onChange={handleChange}  name = "password"
                    />
                </div>
               
                <div className="forgot-field">Forgot Password ?</div>
                {(state.wait === false) ? 

                    <button className="form-submit-button" ><ExitToAppIcon/></button>
                 :
                 <button className="form-submit-button">
                 <i className="fa fa-spinner fa-spin"></i>Loading
               </button>
                }

            

                <Link to="/login">
                <div className="forgot-field">Have an acoount ? Sign In</div>
                </Link>
        </form>
        </div>
    </div>
    )
}



export default RegistertoUs
