import { combineReducers } from 'redux'
import {
  requestOrder,
  failureOrder,
  vouchers,
  filterStatusOrder
} from '../business/vouchers/reducers'

export default combineReducers({
  requestOrder,
  failureOrder,
  order,
  form: formReducer
})
