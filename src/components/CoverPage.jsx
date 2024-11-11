// src/CoverPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CoverPage.css';

const CoverPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/weather');
    };

    return (
        <div className="cover-page">
            <div className="content">
                <h1>GreenWeather</h1>
                <p>Your reliable source for weather updates.</p>
                <button className="start-button" onClick={handleClick}>Get Started</button>
            </div>
        </div>
    );
};

export default CoverPage;
