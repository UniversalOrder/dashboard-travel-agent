import { combineReducers } from 'redux'
import {
  requestOrder,
  failureOrder,
  order
} from '../business/order/reducers'

export default combineReducers({
  requestOrder,
  failureOrder,
  order
})
