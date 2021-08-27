import React from 'react';


const Rentdate = () => {
    var date1 = new Date("09/14/2021");
  var date2 = new Date("08/27/2021");

  // To calculate the time difference of two dates
  var Difference_In_Time = date1.getTime() - date2.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return (
        <div>
            {Difference_In_Days}
        </div>
    )
}

export default Rentdate
