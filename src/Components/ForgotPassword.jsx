import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { hostMachine } from './Appconstant';


const ForgotPassword = (props) => {

    const [state, setState] = useState({
        email: "",
        password: "",
        fullname: "",
        wait: false,
        displayPassword: false,
        alertMessage: false,
        canChangePwd: false
    }, []);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        setState({ wait: true })
        e.preventDefault();
        axios.post(hostMachine + '/api/login', {
            email: state.email
        })
            .then(function (response) {
                const data = (response.data);
                if (data[0].email === state.email) {
                    if (response.status === 200)
                        setState({ email: data[0].email, password: "", fullname: data[0].fullname, displayPassword: true, wait: false, alertMessage: false, canChangePwd: true })
                }
            })
            .catch(function (error) {
                console.log(error);

                setState({ alertMessage: true, wait: false, email: "", password: "", })
            })

    }

    const handleChangePassword = (e) => {
        setState({ wait: true })
        e.preventDefault();
        axios.post(hostMachine + '/api/resetpassword=true', {
            fullname: state.fullname,
            email: state.email,
            password: state.password,
        })
            .then(function (response) {
                if (response)
                   setState({ email: "", password: "", wait: false})
                   return(props.history.push("/login"));
            })
            .catch(function (error) {
                setState({ alertMessage:true})
            })
    }

    return (
        <div className="container">
            {(state.alertMessage === true) ?
                <Alert severity="error">Invalid Email or Server Not responding</Alert>
                : <span></span>
            }
            <div className="logo">Change your password</div>

            <div className="login-item">
                <form className="form-login" onSubmit={(state.canChangePwd) ? handleChangePassword : handleSubmit}>
                    <div className="form-field">
                        <TextField
                            required
                            id="outlined-required"
                            label="User Name or Email"
                            value={state.email} onChange={handleChange}
                            variant="outlined" name="email"
                        />
                    </div>
                    {(state.displayPassword) ?
                        <div className="form-field">
                            <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                variant="outlined" type="password" name="password"
                                value={state.password} onChange={handleChange}
                            />
                        </div> : <></>}
                    <div className="forgot-field">Forgot Password ?</div>
                    {(state.wait === false) ?

                        <button className="form-submit-button" ><HomeRoundedIcon /></button>
                        :
                        <button className="form-submit-button">
                            <i className="fa fa-spinner fa-spin"></i>Loading
                        </button>
                    }
                    <Link to="/register">
                        <div className="forgot-field">Register</div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
