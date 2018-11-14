import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {

    const scrollToSection = (section) => {
        props.onClose();

        scroller.scrollTo(section, {
            duration: 500,
            delay: 50,
            smooth: true,
            offset: -100
        });
        
    };

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose()}
        >
            <List component="nav">
                <ListItem button onClick={() => scrollToSection('featured')} >
                    Event Starts in
                </ListItem>
    
                <ListItem button onClick={() => scrollToSection('venueInfo')} >
                    Venue Info
                </ListItem>
    
                <ListItem button onClick={() => scrollToSection('highlights')} >
                    Highlights
                </ListItem>
    
                <ListItem button onClick={() => scrollToSection('pricing')} >
                    Pricing
                </ListItem>
    
                <ListItem button onClick={() => scrollToSection('location')} >
                    Location
                </ListItem>
            </List>
        </Drawer>
    )
};

export default SideDrawer;