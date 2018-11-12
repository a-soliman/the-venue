import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


class Discount extends Component {
    state ={
        discountStart: 0,
        discountEnd: 30
    };


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade>
                        <div className="discount_porcentage">
                            <span>23 %</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                        
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th June</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec dignissim mauris. Sed tristique nisi quis ipsum cursus, non consequat nisl vulputate. Donec pellentesque malesuada libero, vitae scelerisque tellus dignissim eget. Donec aliquet, lectus ac vehicula ultrices, urna nisl rutrum dolor, ac tincidunt justo tortor a lectus. Donec quis eleifend ligula, ac pellentesque libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut fermentum diam elementum, fermentum urna non.</p>

                            <div>
                                Button
                            </div>
                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;
