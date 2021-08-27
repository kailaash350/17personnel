import { React, useEffect } from "react";
import { useLocation } from "react-router";
import { Button } from "@material-ui/core";
import TextScroller from './TextScroll'

const PersonnelPage = (props) => {
    const location = useLocation();
    useEffect(() => {
     }, [location]);

     const handlelogout =(e)=>{
        return ( props.history.push({pathname:'/login'})
        )
    }

  
    
    return (
        <div className="personnel-container">
        <div className="details-container">
            <h1>Hyzaa Buddy {location.state.detail}  </h1>
        </div>
        <p>
        <TextScroller text={"You have 18days to pay rent. Next rent is on September 14 2021"}/>
        </p>
         <Button onClick={handlelogout} variant="contained" color="primary">Leave Home</Button>
         </div>
    )
}


export default PersonnelPage;
