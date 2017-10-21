import {
  REQUEST_ORDER,
  FAILURE_ORDER,
  RECEIVE_ORDER
} from './actions'

const requestOrder (state = false, action) {
  switch (action.type) {
    case REQUEST_ORDER:
      return action.isFetching
    default:
      return state
  }
}

const failureOrder = (state = false, action) => {
  switch (action.type) {
    case FAILURE_ORDER:
      return action.hasErrored
    default:
      return state
  }
}

const vouchers = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ORDER:
      return action.vouchers
    default:
      return state
  }
}
