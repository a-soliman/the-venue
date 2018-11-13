import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.097524724129!2d-122.40620338422016!3d37.78775417975715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085ac02aaaba9c5%3A0xad37fbf031c965e7!2sFirewood.!5e0!3m2!1sen!2sus!4v1542152226924" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen>
        </iframe>

        <div className="location_tag">
            <div>Location</div>
        </div>
        </div>
    );
};

export default Location;