import React from 'react';
import MainButton from './MainButton'

class InfoBox extends React.Component {
    handleButtonClick = () => {
        this.props.history.push(this.props.buttonLink);
    };

    render() {
        return (
            <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>${this.props.price}</span>
                    <span>{this.props.title}</span>
                </div>
                <div className="pricing_description">
                    {this.props.desc}
                </div>
                <div className="pricing_buttons">
                    <MainButton 
                        title={this.props.buttonTitle} 
                        submit={this.handleButtonClick} 
                        bck="#ffa800"
                        color='white'
                    />
                </div>
            </div>
        );
    }
}


export default InfoBox;