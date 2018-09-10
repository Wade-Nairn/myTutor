import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookingRow from './BookingRow';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import moment from 'moment';
import * as bookingActions from '../actions/bookingActions';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

class Pending extends Component {
    render() {
    let bookings = this.props.bookings
    bookings = _.sortBy(bookings, function(o) { return new moment(o.date) })
    return (
      <Table>
          <TableBody>
                {bookings
                .filter(item => item.bookingStatus === "pending")
                .map((booking) => 
                    <BookingRow key={booking.id} i={booking.id} booking={booking} />)}
             </TableBody>
      </Table>
    )
  }
}

Pending.propTypes = {
    bookings: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
      bookings: state.bookings
    };
    
  }
const  mapDispatchToProps = (dispatch)  => {
    return bindActionCreators(bookingActions, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Pending)
