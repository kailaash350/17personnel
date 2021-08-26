import React from 'react'
import kailaash from '../images/kailaash.jpg';
import ram from '../images/ram.jpg';
import vinodh from '../images/vinodh.jpg';


const Home = props => {
    return (
        <>
        <h1>Welcome to our happy home &#129312; </h1>
<p>The place where friends share joy and drinks to cherrish the success of others,</p>
<p>House where great cooks and pitmaster experiment, explore new culinary marvels </p>
<ul className="ul-image">
    <li className="home-image"><img src = {kailaash} alt="dp1.com"/></li>
    <li className="home-image"><img src = {vinodh} alt="dp1.com"/></li>
    <li className="home-image"><img src = {ram} alt="dp1.com"/></li>
</ul>
      </>
    );
}


export default Home;
