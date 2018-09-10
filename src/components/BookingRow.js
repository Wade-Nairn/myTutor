import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment';
// import moment from 'moment';

import './BookingRow.css';

import * as bookingActions from '../actions/bookingActions';

import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class BookingRow extends Component {
    
    handleConfirm = (e) => {
        this.props.confirmBooking(this.props.booking)
    }

    handleCancel = (e) => {
        console.log(e)
        this.props.cancelBooking(this.props.booking)
    }


  render() {
    let booking = this.props.booking

    const confirmButton = (
        <Button 
            variant="outlined" 
            color="primary"
            onClick={ this.handleConfirm }
            >
            Confirm
        </Button>
    )
    const cancelButton = (
        <Button 
            variant="outlined" 
            color="secondary"
            onClick={this.handleCancel}
            >
            Cancel
        </Button>
    )

    // Moment time formating and calculations
    const date = booking.date
    
    // This was my attempt at rendering "Today" if it was currently to however i couldn't get it to display correctly.
    // const isToday = moment().calendar(date, {
    //     sameDay: '[Today]'
    // });
    // const today = "Today"
    // const dateFormat = `${isToday === "Today" ? today + ' MMM, h:mm a' : 'dddd DD MMM, h:mm a' }`
    
    const dateFormat = 'dddd DD MMM, h:mm a'

    return (
        <TableRow >
            <TableCell component="th" scope="row">
            <div className='Image-Container'>
                <img className='Avatar' src={booking.avatar} alt={booking.user}/>
                <img className='Icon'src={booking.bookingStatus === "pending" ? '/img/pending.svg' : '/img/confirmed.svg' } alt={booking.bookingStatus}/>
            </div>
            </TableCell>
            <TableCell component="th" scope="row">
                {booking.user}
            </TableCell>
            <TableCell component="th" scope="row">
                <Moment format={dateFormat} date={date} />
            </TableCell>
            <TableCell component="th" scope="row">
                {booking.bookingStatus === "pending" ? confirmButton : cancelButton}
            </TableCell>
        </TableRow>
    )
  }
}

BookingRow.propTypes = {
    confirmBooking: PropTypes.func.isRequired,
    cancelBooking: PropTypes.func.isRequired,
    bookings: PropTypes.array.isRequired,
    booking: PropTypes.object.isRequired
  }

const mapStateToProps = (store) => ({
    bookings: store.bookings
})

const  mapDispatchToProps = (dispatch)  => {
    return bindActionCreators(bookingActions, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(BookingRow)
