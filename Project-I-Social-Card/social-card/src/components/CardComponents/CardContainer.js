import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    return(
        <div className = 'fullDiv'>
            <CardBanner />
            <div className = 'contentDiv'><CardContent /></div>
        </div>
    );
};

export default CardContainer;