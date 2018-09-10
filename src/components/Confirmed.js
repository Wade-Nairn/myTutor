import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import BookingRow from './BookingRow';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

class Confirmed extends Component {

  render() {
    let bookings = this.props.bookings
    bookings = _.sortBy(bookings, function(o) { return new moment(o.date) })
    return (
      <Table>
          <TableBody>
                {bookings
                    .filter(item => item.bookingStatus === "confirmed")
                    .map((booking, i) =>
                    <BookingRow {...this.props} key={i} i={i} booking={booking} />)}
             </TableBody>
      </Table>
    )
  }
}

Confirmed.propTypes = {
    bookings: PropTypes.array.isRequired
}

const mapStateToProps = (store) => ({
    bookings: store.bookings,
    
})

export default connect(mapStateToProps)(Confirmed)