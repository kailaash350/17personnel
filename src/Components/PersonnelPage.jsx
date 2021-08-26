import { useEffect } from "react";
import { useLocation } from "react-router";
import { Button } from "@material-ui/core";

const PersonnelPage = (props) => {
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname); 
        console.log(location.state.detail);
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
         <Button onClick={handlelogout} variant="contained" color="primary">Leave Home</Button>
         </div>
    )
}


export default PersonnelPage;
