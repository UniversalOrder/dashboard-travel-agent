export const REQUEST_ORDER = 'REQUEST_ORDER'
export const FAILURE_ORDER = 'FAILURE_ORDER'
export const RECEIVE_ORDER = 'RECEIVE_ORDER'

export const requestOrder = isFetching => {
  return {
    type: REQUEST_ORDER,
    isFetching
  }
}

export const failureOrder = hasErrored => {
  return {
    type: FAILURE_ORDER,
    hasErrored
  }
}

export const receiveOrder = order => {
  return {
    type: RECEIVE_ORDER,
    order
  }
}
