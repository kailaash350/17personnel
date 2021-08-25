
import React, { useState} from 'react'
import TextField from '@material-ui/core/TextField';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';

function LoginCard() {

    const [state, setState] = React.useState({
        Name: "",
        Password: "",
        hidden: true 
      });
    

    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
};

const mySubmitHandler = (e) => {
    console.log(state.Name)
    
  }

    return (
        <div className="container">
            <div className="logo">Access 17 Foley Street</div>
            <div className="login-item">
                <form className="form-login" onSubmit={mySubmitHandler}>
                    <div className="form-field">
                        <TextField
                            required
                            id="outlined-required"
                            label="User Name or Email"
                            value={""}
                            value={state.name} onChange={handleChange}
                            variant="outlined"
                        />
                    </div>
                    <div className="form-field">
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            variant="outlined" type="password"
                            value={state.password} onChange={handleChange}
                        />
                    </div>
                    <div className="forgot-field">Forgot Password ?</div>
                    <button className="form-submit-button" ><ExitToAppIcon/></button>
                    <div className="forgot-field">Register</div>
                </form>
            </div>
        </div>
    )
}

export default LoginCard
