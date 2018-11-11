import React from 'react';
import Carousel from './Carrousel';

const Featured = () => {
    return (
        <div style={{position: 'relative', top: '-20px'}}>

            <Carousel />

            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
        </div>
    );
}

export default Featured;