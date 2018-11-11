import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends React.Component {

  state = {
    drawerOpen: false,
    transparentHeader: true
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.toggleTransparency)
  };

  toggleTransparency = () => {
    let transparent;
    if ( window.scrollY > 0 ) transparent = false;
    else transparent = true;
    
    this.setState({
      transparentHeader: transparent
    });
  };

  toggleDrawer = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {
    return (
      <header className="header">
        <AppBar 
          position="fixed" 
          style={{
            backgroundColor: this.state.transparentHeader ? 'transparent' : '#2f2f2f',
            boxShadow: 'none',
            padding: '10px 0px'
          }}
          >
            <Toolbar>
              <div className="header_logo">
                <div className="font_righteous header_logo_venue">The Venue</div>

                <div className="header_logo_title">Musical Events</div>

                <IconButton 
                  aria-label="Menu" 
                  color="inherit" 
                  onClick={() => this.toggleDrawer()}>
                    <MenuIcon />
                </IconButton>

                <SideDrawer 
                  open={this.state.drawerOpen}
                  onClose={() => this.toggleDrawer()}
                />
              </div>
            </Toolbar>
        </AppBar>
      </header>
    );
    
  }
}




export default Header;
