import React from 'react'
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {localhost} from '../Constants';




const RegistertoUs = props => {

    const [state, setState] = React.useState({
        result:""
    });
   
    axios.get('http://127.0.0.1:9000/greeting')
  .then(function (response) {
      console.log(response);
  })

    return (
        <div>
           {state.result}
        </div>
    )
}



export default RegistertoUs
