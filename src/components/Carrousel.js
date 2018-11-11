import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                overflow: 'hidden',
                height: `${window.innerHeight}px`
            }}    
        >
            <Slider {...settings} >
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background: `url(/images/slide_one.jpg)`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background: `url(/images/slide_two.jpg)`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background: `url(/images/slide_three.jpg)`,
                            height: `${window.innerHeight}px`
                        }}
                    ></div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Carousel;