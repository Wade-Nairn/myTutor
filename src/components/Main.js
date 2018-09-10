import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as bookingActions from '../actions/bookingActions';
import Pending from './Pending';
import Confirmed from './Confirmed';

import './Main.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
class Main extends Component {
    state = {
        value: 0,
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };

  render() {
    
    const { value } = this.state;
    return (

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="Grid"
                >
                <Paper elevation={1}>
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Pending" />
                        <Tab label="Confirmed" />
                    </Tabs>
                    {value === 0 && <TabContainer><Pending props={this.props}/></TabContainer>}
                    {value === 1 && <TabContainer><Confirmed props={this.props}/></TabContainer>}
                </Paper>
             </Grid>
    )
  }
}

Main.propTypes = {
    bookings: PropTypes.array.isRequired,
    confirmBooking: PropTypes.func.isRequired,
    cancelBooking: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    bookings: state.bookings
})

const  mapDispatchToProps = (dispatch)  => {
    return bindActionCreators(bookingActions, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Main)