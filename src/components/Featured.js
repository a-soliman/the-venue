import React from 'react';
import Carousel from './Carrousel';
import CountDown from './CountDown';

const Featured = () => {
    return (
        <div style={{position: 'relative', top: '-20px'}}>

            <Carousel />

            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>

            <CountDown />
        </div>
    );
}

export default Featured;