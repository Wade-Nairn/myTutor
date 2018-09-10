import bookings from '../data/bookings'

const initialState = {
    bookings,
}

function bookingReducer (state = initialState, action){
    switch(action.type) {
      case 'CONFIRM_BOOKING':
        let i = state.findIndex(booking => booking.id === action.payload.id)
        return [ 
            ...state.slice(0, i),
            {...state[i], bookingStatus:'confirmed'},
            ...state.slice(i + 1)
            ]
      case 'CANCEL_BOOKING':
        let j = state.findIndex(booking => booking.id === action.payload.id)
        return [
            ...state.slice(0, j),
            {...state[j],  bookingStatus:'cancelled'},
            ...state.slice(j + 1)
        ];

      default:
        return state;
    }
  }
  export default bookingReducer