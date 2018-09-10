import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import './Header.css';

class Header extends Component {
    
  render() {
    return (
      <AppBar className="Header">
          <Typography variant="title" color="inherit">
            My Tutor Bookings Dashboard
          </Typography>
      </AppBar>
    );
  }
}

export default Header;
