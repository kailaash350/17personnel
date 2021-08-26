
import React from 'react'
import TextField from '@material-ui/core/TextField';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link} from 'react-router-dom';
import axios from 'axios';

function LoginCard (props) {

    const [state, setState] = React.useState({
        email: "",
        password: "",
        wait: false 
      });
    

    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
    axios.get('http://localhost:9001/api/login', {
        email:state.email,
        password: state.password,
      })
      .then(function (response) {
          console.log(response)
        if(response.status === 200)
        setState({email:"",password:"", wait:false})
      })
      .catch(function (error) {
        console.log(error);
      });

        //return ( props.history.push("/success"));
    
  }

    return (
        <div className="container">
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
                    <button className="form-submit-button" ><ExitToAppIcon/></button>
                    <Link to = "/register">
                    <div className="forgot-field">Register</div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default LoginCard
