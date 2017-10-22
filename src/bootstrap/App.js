import React from 'react'
import { Provider } from 'react-redux'
import Order from '../containers/Order'
import generateStore from './generateStore'
import registerServiceWorker from './registerServiceWorker'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

const store = generateStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Order} />
      </Switch>
    </Router>
  </Provider>
)

registerServiceWorker()

export default App
