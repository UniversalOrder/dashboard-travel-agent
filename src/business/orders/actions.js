export const REQUEST_ORDER = 'REQUEST_ORDER'
export const FAILURE_ORDER = 'FAILURE_ORDER'
export const RECEIVE_ORDER = 'RECEIVE_ORDER'

const requestOrder = isFetching => {
  return {
    type: REQUEST_ORDER,
    isFetching
  }
}

const failureOrder = hasErrored => {
  return {
    type: FAILURE_ORDER,
    hasErrored
  }
}

const receiveOrder = order => {
  return {
    type: RECEIVE_ORDER,
    order
  }
}
