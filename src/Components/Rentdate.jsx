import React  from 'react';


const Rentdate = () => {
    
   

    var date1 = new Date();
    var rentdate = new Date('September 14, 2021 00:00:00');
    if(date1.getTime() === rentdate.getTime()){
        
    }
    
    const dif = rentdate.getTime() - date1.getTime()
    const day = Math.round(dif/ 24/60/60/1000);
    const rentReminder = "You have "+ day +" days to pay the rent"

    return (
        <b>{rentReminder}</b>
    )
}

export default Rentdate
