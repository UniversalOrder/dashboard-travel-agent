import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../bootstrap/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore (initialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
}
