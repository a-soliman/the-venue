import React from 'react';
import Button from '@material-ui/core/Button';

const MainButton = ({ submit, title, bck, color}) => {
    const handleClick = (e) => {
        e.preventDefault();
        submit();
    };

    return (
        <Button
            onClick={handleClick}
            href="#"
            variant="contained"
            size="small"
            style={{
                background: `${bck}`,
                color: `${color}`
            }}
        >
            <img
                src="/images/icons/ticket.png"
                className="iconImage"
                alt="Icon_button"
            />
            {title.toUpperCase()}
        </Button>
    );
};

export default MainButton;