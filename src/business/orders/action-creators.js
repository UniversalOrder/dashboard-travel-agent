import { checkHttpStatus } from '../../utils'
import {
  requestOrder,
  failureOrder,
  receiveOrder
} from './actions'

const fetchOrder = () => {
  return dispatch => {
    dispatch(requestOrder(true))

    fetch(`${process.env.REACT_APP_PROXY_IATA_API}`)
    .then(response => {
      dispatch(requestOrder(false))

      return response
    })
    .then(checkHttpStatus)
    .then(order => dispatch(receiveOrder(order)))
    .catch(() => dispatch(
      failureOrder(true)
    ))
  }
}
