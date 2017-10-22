import { checkHttpStatus } from '../../utils'
import {
  requestOrder,
  failureOrder,
  receiveOrder
} from './actions'

export const fetchOrder = () => {
  return dispatch => {
    dispatch(requestOrder(true))

    fetch(`${process.env.REACT_APP_PROXY_MIDDLEWARE_API}/air-shopping`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      dispatch(requestOrder(false))

      return response
    })
    .then(checkHttpStatus)
    .then(response => response.json())
    .then(order => dispatch(receiveOrder(order)))
    .catch(() => dispatch(
      failureOrder(true)
    ))
  }
}
