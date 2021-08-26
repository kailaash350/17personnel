
import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

function LoginCard(props) {

    const [state, setState] = React.useState({
        email: "",
        password: "",
        fullname:"",
        wait: false,
        alertmessage: false
    });


    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({ wait:true })
        axios.post('http://localhost:9001/api/login', {
            email: state.email,
            password: state.password,
        })
            .then(function (response) {
                const data = (response.data);
                
                if(data[0].email === state.email && data[0].password === state.password){
                    if (response.status === 200)
                    setState({ email: "", password: "", wait: false, fullname:data[0].fullname})
                    return ( props.history.push({
                        pathname:'/Auth=true',
                        state:{detail:data[0].fullname}
                    })
                    )}
                else{
                    setState({ alertmessage:true, wait: false, email: "", password: "", })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            {(state.alertmessage === true)?
        <Alert severity="error">Invalid username or password</Alert>
        :<span></span>
            }
            <div className="logo">Access 17 Foley Street</div>
            
            <div className="login-item">
                <form className="form-login" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <TextField
                            required
                            id="outlined-required"
                            label="User Name or Email"
                            value={state.email} onChange={handleChange}
                            variant="outlined" name="email"
                        />
                    </div>
                    <div className="form-field">
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            variant="outlined" type="password" name="password"
                            value={state.password} onChange={handleChange}
                        />
                    </div>
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

export default LoginCard
