// Confirm a Booking
export const confirmBooking = (booking) => {
    return {
        type: 'CONFIRM_BOOKING',
        payload: booking
    }
} 

// Cancel a Booking
export const cancelBooking = (booking) => {
    return {
        type: 'CANCEL_BOOKING',
        payload: booking
    }
} 
