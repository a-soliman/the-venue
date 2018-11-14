import React from 'react';
import Zoom from 'react-reveal/Zoom';

import InfoBox from './InfoBox';

class Pricing extends React.Component {
    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec dignissim mauris. Sed tristique nisi quis ipsum cursus.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec dignissim mauris. Sed tristique nisi quis ipsum cursus.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec dignissim mauris. Sed tristique nisi quis ipsum cursus.'
        ],
        linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [500, 0, 500]
    };

    fillInfoBoxes = () => (
        this.state.prices.map((box, i) => (
            <div className="pricing_item" key={i}  >
                <Zoom delay={this.state.delay[i]} >
                    <InfoBox 
                        price={this.state.prices[i]}
                        title={this.state.positions[i]}
                        desc={this.state.desc[i]}
                        buttonTitle="Book Now"
                        buttonLink={this.state.linkto[i]}
                        history={this.props.history}
                    />
                </Zoom>
            </div>
            
        ))
    );

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.fillInfoBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;