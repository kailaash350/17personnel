import React from 'react'
import ram from '../images/ram.jpg';
import vinodh from '../images/vinodh.jpg';
import kailaash from '../images/kk.jpeg'
import deepak from '../images/deepak.jpeg'
import steve from '../images/steve.JPG';
import Weather from './Weather';


const Home = props => {
    return (
        <>
            <h1>Welcome to our happy home &#129312; </h1>
            <p>The place where friends share joy and drinks to cherish the success of friends,</p>
            <p>Bunch of people where you spend your day with fun</p>
            <p>House where great cooks and pitmaster experiment, explore new culinary marvels </p>
            <ul className="ul-image">
                <li className="home-image"><img src={kailaash} alt="dp1.com" /></li>
                <li className="home-image"><img src={vinodh} alt="dp1.com" /></li>
                <li className="home-image"><img src={ram} alt="dp1.com" /></li>
                <li className="home-image"><img src={deepak} alt="dp1.com" /></li>
                <li className="home-image"><img src={steve} alt="dp1.com" /></li>
            </ul>
            <div className="weather-container"><Weather/></div>
        </>
    );
}


export default Home;
